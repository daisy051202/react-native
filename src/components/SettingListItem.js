import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../config/colors';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function SettingListItem({title,iconName}) {
  const theme = useSelector(state => state.theme);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={iconName} size={20} color={colors.grey} />
        <Text
          style={[
            styles.title,
            {color: theme === 'dark' ? colors.white : colors.black},
          ]}>
          {title}
        </Text>
      </View>
      <Text
        style={[
          styles.icon,
          {color: theme === 'dark' ? colors.white : colors.black},
        ]}>
        &gt;
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default SettingListItem;
