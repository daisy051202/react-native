import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {colors} from '../config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ColorPicker from '../components/ColorPicker';

const Stack = createStackNavigator();

function LayoutScreen(props) {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const color = useSelector(state => state.color);
  console.log(theme);
  const boxRef = useRef();
  const [dayMode, setDayMode] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  useEffect(() => {
    setDayMode(theme !== 'dark');
    setNightMode(theme === 'dark');
  }, [theme]);
  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: theme === 'dark' ? colors.black : colors.white},
      ]}>
      <View>
        <Text style={styles.titleText}>Xem trước</Text>
      </View>
      <View
        style={[
          styles.previewContainer,
          {backgroundColor: theme === 'dark' ? colors.black : colors.white},
        ]}>
        <View style={{alignSelf: 'flex-start'}}>
          <Text
            style={[
              styles.demoText,
              {
                color: theme === 'dark' ? colors.white : colors.black,
                backgroundColor: colors[color],
              },
            ]}>
            Wow! Chủ đề tuyệt đẹp
          </Text>
        </View>
        <View style={{alignSelf: 'flex-start'}}>
          <Text
            style={[
              styles.demoText,
              {
                color: theme === 'dark' ? colors.white : colors.black,
                backgroundColor: colors[color],
              },
            ]}>
            Chào các bạn
          </Text>
        </View>
        <View style={{alignSelf: 'flex-end'}}>
          <Text
            style={[
              styles.demoText,
              {
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 8,
                backgroundColor:
                  theme === 'dark' ? colors.mediumBlack : colors.mediumWhite,
                color: theme === 'dark' ? colors.white : colors.black,
              },
            ]}>
            Đây là màu yêu thích của tôi
          </Text>
        </View>
      </View>
      <Text style={styles.titleText}>Màu</Text>
      <View style={styles.colorContainer}>
        <ColorPicker pickColor={colors.dodgerblue} />
        <ColorPicker pickColor={colors.red} />
        <ColorPicker pickColor={colors.orange} />
        <ColorPicker pickColor={colors.green} />
        <ColorPicker pickColor={colors.blue} />
        <ColorPicker pickColor={colors.purple} />
      </View>
      <Text style={styles.titleText}>Chế Độ</Text>
      <View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={dayMode}
            style={[
              styles.checkbox,
              {backgroundColor: theme === 'dark' ? colors.white : null},
            ]}
            ref={boxRef}
            onValueChange={() => {
              dispatch({type: 'SET_LIGHT_THEME'});
              // AsyncStorage.setItem("theme","light")
            }}
          />
          <Text
            style={[
              styles.label,
              {color: theme === 'dark' ? colors.white : colors.black},
            ]}>
            Sáng
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={nightMode}
            style={[
              styles.checkbox,
              {backgroundColor: theme === 'dark' ? colors.white : null},
            ]}
            onValueChange={() => {
              dispatch({type: 'SET_DARK_THEME'});
            }}
          />
          <Text
            style={[
              styles.label,
              {color: theme === 'dark' ? colors.white : colors.black},
            ]}>
            Tối
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
  colorContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  colorPicker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  checkbox: {
    alignSelf: 'center',
    marginRight: 5,
  },
  label: {
    alignSelf: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  demoText: {
    backgroundColor: 'grey',
    // width: 'max-content',
    padding: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginVertical: 3,
    color: 'black',
  },
  previewContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
  },
  titleText: {
    textTransform: 'uppercase',
    color: 'grey',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});

export default LayoutScreen;
