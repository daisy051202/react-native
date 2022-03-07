import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../config/colors';
function ListIemSwipeAction(props) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.dots}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={25}
            color={colors.white}
          />
          <Text style={{color: colors.white, fontFamily: 'Roboto'}}>Thêm</Text>
        </View>
        <View style={styles.call}>
          <MaterialCommunityIcons name="phone" size={25} color={colors.white} />
          <Text style={{color: colors.white, fontFamily: 'Roboto'}}>Gọi</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    padding: 20,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  call: {
    padding: 20,
    backgroundColor: colors.dodgerblue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListIemSwipeAction;
