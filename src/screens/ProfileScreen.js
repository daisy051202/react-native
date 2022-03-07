import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuthContext} from '../App';
import {useSelector} from 'react-redux';
import {colors} from '../config/colors';
import ProfileItem from '../components/ProfileItem';

function ProfileScreen({navigation}) {
  const theme = useSelector(state => state.theme);
  const color = useSelector(state => state.color);
  const {authContext, state} = useAuthContext();
  const onPressHandler = async () => {
    Alert.alert(
      'Đăng xuất',
      'Bạn muốn ghi nhớ cài đặt tài khoản và ứng dụng trên thiết bị này?',
      [
        {text: 'Cancel'},
        {
          text: 'Yes',
          onPress: async () => {
            await AsyncStorage.setItem('signOut', 'true');
            authContext.signOut();
          },
        },
        {
          text: 'No',
          onPress: () => {
            AsyncStorage.clear();
            authContext.signOut();
          },
        },
      ],
    );
    // await AsyncStorage.clear();
    // signOut();
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme === 'dark' ? colors.black : colors.white},
      ]}>
      <View style={styles.inforContainer}>
        <Image
          style={styles.image}
          source={require('../assets/profile-image.jpg')}
        />
        <View>
          <Text
            style={{
              color: theme === 'dark' ? colors.white : colors.black,
              fontWeight: 'bold',
            }}>
            {state.userName}
          </Text>
          <Text style={{color: theme === 'dark' ? colors.white : colors.black}}>
            anhtheanh12311@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            {color: theme === 'dark' ? colors.white : colors.black},
          ]}>
          Đang hoạt động
        </Text>
        <ProfileItem
          text="Chia sẻ những việc bạn đang làm"
          iconName="share-variant-outline"
        />
        <ProfileItem text="Thẻ đánh dấu" iconName="bookmark-outline" />
        <ProfileItem text="Mời bạn" iconName="account-group" />
        <TouchableOpacity onPress={() => navigation.navigate('User Detail')}>
          <ProfileItem text="Hồ sơ Skype" iconName="account" />
        </TouchableOpacity>
        <ProfileItem
          text="Skype tới điện thoại"
          iconName="alpha-s-circle-outline"
        />
        <ProfileItem text="Số Skype" iconName="phone-plus-outline" />
        <TouchableOpacity onPress={() => navigation.navigate('Setting Detail')}>
          <ProfileItem text="Cài đặt" iconName="account-settings-outline" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: color}]}
        onPress={onPressHandler}>
        <Text>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  inforContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  button: {
    width: '100%',
    marginTop: 15,
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
});
export default ProfileScreen;
