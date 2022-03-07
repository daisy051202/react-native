import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function ColorPicker({pickColor}) {
  const dispatch = useDispatch();
  const color = useSelector(state => state.color);
  return (
    <TouchableOpacity
      style={[styles.colorPicker, {backgroundColor: pickColor}]}
      onPress={() => dispatch({type: `SET_COLOR`, color: pickColor})}>
      {color === pickColor && (
        <View style={styles.absoluteCenter}>
          <Text style={styles.text}>X</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  colorPicker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  absoluteCenter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ColorPicker;
