import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SettingListItem from '../components/SettingListItem';
import {colors} from '../config/colors';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function SettingScreen({navigation}) {
  const theme = useSelector(state => state.theme);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme === 'dark' ? colors.black : colors.white},
      ]}>
      <SettingListItem title="Tài khoản và hồ sơ" iconName="account" />
      <SettingListItem title="Chung" iconName="account-settings-outline" />
      <SettingListItem title="Quyền riêng tư" iconName="lock" />
      <TouchableOpacity
        style={styles.smallContainer}
        onPress={() => navigation.navigate('Giao diện')}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="draw-pen"
            size={20}
            color={colors.grey}
          />
          <Text
            style={[
              styles.title,
              {color: theme === 'dark' ? colors.white : colors.black},
            ]}>
            Giao diện
          </Text>
        </View>
        <Text
          style={[
            styles.title,
            {color: theme === 'dark' ? colors.white : colors.black},
          ]}>
          &gt;
        </Text>
      </TouchableOpacity>
      <SettingListItem title="Gọi" iconName="phone" />
      <SettingListItem title="Nhắn tin" iconName="message-text-outline" />
      <SettingListItem title="Thông báo" iconName="notification-clear-all" />
      <SettingListItem title="Danh bạ" iconName="view-list-outline"/>
      <SettingListItem title="Trợ giúp & phản hồi" iconName="information-outline" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // marginTop: 10,
  },
  smallContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
  },
  icon: {
    fontSize: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingScreen;
