import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';

function Splash({navigation}) {
  // const getData = () => {
  //   AsyncStorage.getItem('UserName').then(value => {
  //     if (value) {
  //       navigation.navigate('Home');
  //     }
  //   });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/logo-skype.png')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Splash;
