import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import SettingScreen from './SettingScreen';
import LayoutScreen from './LayoutScreen';
import {colors} from '../config/colors';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

function Setting(props) {
  const theme = useSelector(state => state.theme);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? colors.black : colors.white,
          },
          headerTitleStyle: {
            color: theme === 'dark' ? colors.white : colors.black,
          },
        }}
      />
      <Stack.Screen
        name="Giao diện"
        component={LayoutScreen}
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? colors.black : colors.white,
          },
          headerTitleStyle: {
            color: theme === 'dark' ? colors.white : colors.black,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Setting;
