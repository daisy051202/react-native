import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {colors} from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
function ListItem({userName, image, text, onPress, theme, renderRightActions, renderLeftActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: image}} />
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.userName,
                {color: theme === 'dark' ? colors.white : colors.black},
              ]}>
              {userName}
            </Text>
            <Text style={styles.text}>{text.slice(0, 30)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  userName: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: '600',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 15,
    // fontWeight: '600',
    color: colors.grey,
  },
});

export default ListItem;
