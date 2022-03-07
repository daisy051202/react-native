import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MessageScreen from './MessageScreen';
import TextScreen from './TextScreen';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from './HomeScreen';
import {colors} from '../config/colors';
import {useSelector} from 'react-redux';
import UserProfileDetailScreen from './UserProfileDetailScreen';

const Stack = createStackNavigator();

function MessageTab(props) {
  const theme = useSelector(state => state.theme);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Overall"
        component={MessageScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Detail"
        component={TextScreen}
        options={({route, navigation}) => ({
          headerStyle: {
            backgroundColor: theme === 'dark' ? colors.black : colors.white,
          },
          headerTitle: () => {
            return (
              <TouchableOpacity
                style={[styles.container]}
                onPress={() =>
                  navigation.navigate('MessageUserDetail', {
                    item: route.params.item,
                  })
                }>
                <Image
                  style={styles.image}
                  source={{uri: route.params?.item.image}}
                />
                <Text
                  style={[
                    styles.text,
                    {color: theme === 'dark' ? colors.white : colors.black},
                  ]}>
                  {route.params?.item.userName}
                </Text>
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="MessageUserDetail"
        component={UserProfileDetailScreen}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.black,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default MessageTab;
