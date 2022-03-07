import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import ProfileItem from '../components/ProfileItem';
import {colors} from '../config/colors';

function UserProfileDetailScreen({route,navigation}) {
  const color = useSelector(state => state.color);
  const theme = useSelector(state => state.theme);
  return (
    <ScrollView>
      <View style={[styles.header, {backgroundColor: color}]}>
        <Image style={styles.image} source={{uri: route.params?.item.image}} />
      </View>
      <View
        style={[
          styles.content,
          {backgroundColor: theme === 'dark' ? colors.black : colors.white},
        ]}>
        <View style={styles.userName}>
          <Text
            style={[
              styles.userName,
              {color: theme === 'dark' ? colors.white : colors.black},
            ]}>
            {route.params.item.userName}
          </Text>
        </View>
        <View style={styles.contentList}>
          <TouchableOpacity onPress={() => navigation.goBack("Detail")}>
            <ProfileItem text="Gửi tin nhắn" iconName="message-text-outline" />
          </TouchableOpacity>
          <ProfileItem text="Bắt đầu cuộc gọi" iconName="phone" />
          <ProfileItem text="Bắt đầu cuộc gọi video" iconName="video" />
          <ProfileItem
            text="Tìm kiếm trong cuộc hội thoại"
            iconName="card-search-outline"
          />
          <ProfileItem text="Gửi SMS" iconName="cellphone-settings" />
          <ProfileItem
            text="Bắt đầu cuộc trò chuyện riêng"
            iconName="message-lock-outline"
          />
          <ProfileItem text="Lên lịch cuộc gọi" iconName="calendar-clock" />
          <ProfileItem text="Chia sẻ liên hệ" iconName="contacts" />
          <ProfileItem
            text={`Tạo nhóm mới với ${route.params.item.userName}`}
            iconName="account-group-outline"
          />
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
  userName: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default UserProfileDetailScreen;
