import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import ProfileScreen from './ProfileScreen';
import MessageTab from './MessageTab';
import ProfileTab from './ProfileTab';
import {colors} from '../config/colors';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function HomeScreen({}) {
  const theme = useSelector(state => state.theme);
  const color = useSelector(state => state.color);
  return (
    <Tab.Navigator
      initialRouteName="Message"
      screenOptions={({route}) => ({
        header: () => null,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? colors.black : colors.white,
        },
        tabBarIcon: ({focused, size, activeColor}) => {
          let iconName;
          if (route.name === 'Message') {
            iconName = 'android-messages';
            size = focused ? 25 : 20;
            activeColor = focused ? color : colors.grey;
          } else if (route.name === 'Profile') {
            iconName = 'account';
            size = focused ? 25 : 20;
            activeColor = focused ? color : colors.grey;
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={activeColor}
            />
          );
        },
      })}>
      <Tab.Screen name="Message" component={MessageTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
