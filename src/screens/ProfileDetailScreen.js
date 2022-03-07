import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useAuthContext} from '../App';
import {colors} from '../config/colors';

function ProfileDetailScreen({navigation, route}) {
  const [username, setUsername] = useState('');
  const color = useSelector(state => state.color);
  const theme = useSelector(state => state.theme);
  const styleTextTitle = [
    styles.textTitle,
    {
      color: theme === 'dark' ? colors.white : colors.black,
    },
  ];
  const {settingContext, state} = useAuthContext();
  const handleNameChange = async () => {
    settingContext.changeUsername(username);
    await AsyncStorage.setItem('UserName', username);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, {backgroundColor: color}]}>
        <Image
          style={styles.image}
          source={require('../assets/profile-image.jpg')}
        />
      </View>
      <View
        style={[
          styles.content,
          {backgroundColor: theme === 'dark' ? colors.black : colors.white},
        ]}>
        <View style={styles.userName}>
          <TextInput
            placeholderTextColor={
              theme === 'dark' ? colors.white : colors.black
            }
            style={{
              color: theme === 'dark' ? colors.white : colors.black,
              fontSize: 25,
            }}
            placeholder={state.userName}
            value={username}
            onChangeText={value => setUsername(value)}
            onSubmitEditing={handleNameChange}
          />
          <Image
            style={[
              styles.pencil,
              {
                backgroundColor: theme === 'dark' ? colors.white : null,
                borderRadius: theme === 'dark' ? 20 : null,
              },
            ]}
            source={require('../assets/pencil.png')}
          />
        </View>
        <View style={styles.contentList}>
          <Text style={styleTextTitle}>Chia sẻ hồ sơ</Text>
          <Text style={styles.textDetail}>&gt;</Text>
        </View>
        <View>
          <Text style={styles.title}>Hồ sơ</Text>
          <View style={styles.contentList}>
            <Text style={styleTextTitle}>Tên Skype</Text>
            <Text style={styles.textDetail}>live:.cid.eb594e57e5435f90</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styleTextTitle}>Email</Text>
            <Text style={styles.textDetail}>anhtheanh12311@gmail.com</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styleTextTitle}>Ngày sinh</Text>
            <Text style={styles.textDetail}>Thêm ngày sinh</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Khác</Text>
          <View style={styles.contentList}>
            <Text style={styleTextTitle}>
              Những cách khác giúp mọi người tìm thấy bạn
            </Text>
            <Text style={styles.textDetail}>&gt;</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styleTextTitle}>Trợ giúp & Phản hồi</Text>
            <Text style={styles.textDetail}>&gt;</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    // alignItems: 'center',
    padding: 15,
  },
  header: {
    height: 120,
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    top: 15,
  },
  text: {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    // marginTop: 10,-
    textAlign: 'center',
  },
  textTitle: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textDetail: {
    color: 'grey',
    fontSize: 15,
    fontFamily: 'Roboto',
  },
  contentList: {
    // marginTop: 15,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    textTransform: 'uppercase',
    color: 'grey',
    marginVertical: 20,
  },
  userName: {
    flexDirection: 'row',
    alignItems: 'center',
    // textAlign: 'center',
    justifyContent: 'space-around',
  },
  pencil: {
    width: 40,
    height: 40,
  },
});

export default ProfileDetailScreen;
