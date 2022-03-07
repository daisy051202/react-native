import 'react-native-gesture-handler';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import LoginScreen from './screens/LoginScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './screens/Splash';

import {Provider} from 'react-redux';
import store from './store/store';

const Stack = createStackNavigator();

const AuthContext = React.createContext();

const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_USERNAME':
          return {
            ...prevState,
            userName: action.userName,
            isLoading: false,
          };
        case 'RESTORE_INFOR':
          return {
            ...prevState,
            isLoading: false,
            // userName: action.userName,
          };
        case 'CHANGE_USERNAME':
          return {
            ...prevState,
            userName: action.userName,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userName: action.userName,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userName: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userName: null,
    },
  );
  useEffect(() => {
    const getData = async () => {
      let userName;
      let signOut;
      try {
        userName = await AsyncStorage.getItem('UserName');
        signOut = await AsyncStorage.getItem('signOut');
        await AsyncStorage.removeItem('signOut');
      } catch (e) {
        console.log(e);
      }
      console.log(signOut);
      if (signOut !== 'true') {
        dispatch({type: 'RESTORE_USERNAME', userName: userName});
      }
      dispatch({type: 'RESTORE_INFOR'});
    };
    getData();
  }, []);
  const authContext = React.useMemo(() => ({
    signIn: async userName => {
      dispatch({type: 'SIGN_IN', userName: userName});
    },
    signOut: () => dispatch({type: 'SIGN_OUT'}),
  }));
  const settingContext = React.useMemo(() => ({
    changeUsername: username => {
      dispatch({type: 'CHANGE_USERNAME', userName: username});
    },
  }));
  if (state.isLoading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{authContext, state, settingContext}}>
        <Provider store={store}>
          <Stack.Navigator
            // initialRouteName="Splash"
            screenOptions={{
              header: () => null,
            }}>
            {state.userName == null ? (
              <Stack.Screen name="Login" component={LoginScreen} />
            ) : (
              <Stack.Screen name="Home" component={HomeScreen} />
            )}
            {/* <Stack.Screen name="Splash" component={Splash} /> */}
          </Stack.Navigator>
        </Provider>
      </AuthContext.Provider>
    </NavigationContainer>
    // <SettingScreen />
    // <ProfileDetailScreen />
    // <ModalComponent />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default App;
