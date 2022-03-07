import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Image, StyleSheet, Text, View} from 'react-native';
import ProfileScreen from './ProfileScreen';
import ProfileDetailScreen from './ProfileDetailScreen';
import SettingScreen from './SettingScreen';
import Setting from './Setting';
import {colors} from '../config/colors';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

function ProfileTab(props) {
  const theme = useSelector(state => state.theme);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile Overall"
        component={ProfileScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="User Detail"
        component={ProfileDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? colors.black : colors.white,
          },
          headerTitleStyle: {
            color: theme === 'dark' ? colors.white : colors.black,
          },
        }}
        // options={({route}) => ({
        //   headerTitle: () => {
        //     return (
        //       <View style={styles.container}>
        //         <Image
        //           style={styles.image}
        //           source={{uri: route.params?.item.image}}
        //         />
        //         <Text style={styles.text}>{route.params?.item.userName}</Text>
        //       </View>
        //     );
        //   },
        // })}
      />
      <Stack.Screen
        name="Setting Detail"
        component={Setting}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default ProfileTab;
