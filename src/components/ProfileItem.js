import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {colors} from '../config/colors';

function ProfileItem({text, iconName}) {
  const theme = useSelector(state => state.theme);
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={iconName} size={20} color={colors.grey} />
      <Text
        style={{
          color: theme === 'dark' ? colors.white : colors.black,
          marginLeft: 15,
          fontFamily: 'Roboto',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ProfileItem;
