import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuthContext} from '../App';
import {colors} from '../config/colors';
import {useDispatch} from 'react-redux';

function LoginScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [existingUsername, setExistingUsername] = useState('');
  const [password, setPassword] = useState('');
  const {authContext} = useAuthContext();
  const dispatch = useDispatch();
  const getExistingData = async () => {
    const userName = await AsyncStorage.getItem('UserName');
    setExistingUsername(userName);
  };
  useEffect(() => {
    getExistingData();
  }, []);
  const backPressHandler = () => {
    getExistingData();
  };
  const nextPressHandler = async () => {
    if (!userName.length || !password.length) {
      Alert.alert('Warning!', 'Please provide your data!');
    } else {
      try {
        await AsyncStorage.setItem('UserName', userName);
        await AsyncStorage.setItem('Password', password);
        await AsyncStorage.setItem('signOut', 'false');
        authContext.signIn(userName);
        dispatch({type: 'SET_LIGHT_THEME'});
        dispatch({type : "SET_COLOR_DEFAULT"})
        setUserName('');
        setPassword('');
      } catch (err) {
        console.log(err);
      }
    }
  };
  const loginWithExistingUsername = async () => {
    await AsyncStorage.setItem('signOut', 'false');
    authContext.signIn(existingUsername);
  };
  if (existingUsername) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/logo-skype.png')}
        />
        <Text style={styles.text}>Đăng nhập bằng...</Text>
        <View style={styles.existingContainer}>
          <TouchableOpacity
            style={styles.existingUser}
            onPress={loginWithExistingUsername}>
            <Image
              source={require('../assets/profile-image.jpg')}
              style={styles.existingUserImage}
            />
            <View>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {existingUsername}
              </Text>
              <Text style={{color: 'black'}}>anhtheanh12311@gmail.com</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.existingUser}
            onPress={() => setExistingUsername('')}>
            <Image
              source={require('../assets/plus.png')}
              style={styles.existingUserImage}
            />
            <View>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Dùng tài khoản khác
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/logo-skype.png')}
      />
      <Text style={styles.text}>Đăng nhập</Text>
      {}
      <TextInput
        placeholder="Tên của bạn"
        style={styles.textInput}
        value={userName}
        onChangeText={value => setUserName(value)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Mật khẩu của bạn(only text :)))"
        style={styles.textInput}
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={backPressHandler}>
          <Text>Quay lại</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={nextPressHandler}>
          <Text>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-around',
    marginTop: 100,
  },
  existingContainer: {
    width: '70%',
    marginVertical: 30,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.black,
  },
  existingUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  existingUserImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.black,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 50,
  },
  textInput: {
    width: '70%',
    // padding: 20,
    marginTop: 20,
    // backgroundColor: '#fff',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'dodgerblue',
  },
  buttonContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  backButton: {
    backgroundColor: colors.white,
    width: '30%',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  nextButton: {
    backgroundColor: 'dodgerblue',
    width: '30%',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'dodgerblue',
  },
});

export default LoginScreen;
