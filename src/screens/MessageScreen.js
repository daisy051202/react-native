import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Text,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSwipeAction from '../components/ListItemSwipeAction';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import users from '../data/data';
import axios from 'axios';
import {useAuthContext} from '../App';
import {colors} from '../config/colors';
import {useSelector} from 'react-redux';
function MessageScreen({navigation}) {
  const [users, setUsers] = useState([]);
  const theme = useSelector(state => state.theme);
  const {state} = useAuthContext();
  const [refreshing, setRefreshing] = useState(false);
  const [password, setPassword] = useState('');
  const fetchUser = async () => {
    const {data} = await axios.get(
      'https://mocki.io/v1/45aee0dd-dad6-41bf-9d95-1d1debc40a95',
    );
    setUsers(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const getData = () => {
    try {
      AsyncStorage.getItem('Password').then(value => {
        if (value !== null) {
          setPassword(value);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme === 'dark' ? colors.black : colors.white},
      ]}>
      <View style={styles.imageContainer}>
        <Image
          style={[
            styles.image,
            {
              borderWidth: 1,
              borderColor: theme === 'dark' ? colors.white : colors.black,
            },
          ]}
          source={require('../assets/profile-image.jpg')}
        />
        <View>
          <Text style={{color: theme === 'dark' ? colors.white : colors.black}}>
            Welcome {state.userName}
          </Text>
          <Text style={{color: theme === 'dark' ? colors.white : colors.black}}>
            Password is {password}
          </Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.textInput} placeholder="Tìm kiếm" />
      </View>
      <View style={{flex: 1, paddingBottom: 29}}>
        <FlatList
          data={users}
          keyExtractor={user => user.id.toString()}
          renderItem={({item}) => (
            <ListItem
              userName={item.userName}
              text={item.text}
              image={item.image}
              onPress={() => navigation.navigate('Detail', {item: item})}
              theme={theme}
              renderRightActions={() => <ListItemSwipeAction />}
            />
          )}
          refreshing={refreshing}
          horizontal={false}
          onRefresh={fetchUser}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textInput: {
    marginTop: 20,
    backgroundColor: colors.white,
    width: '100%',
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
  },
});
export default MessageScreen;
