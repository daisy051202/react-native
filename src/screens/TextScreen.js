import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../config/colors';

function TextScreen({route}) {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState('');
  const [isChatting, setIsChatting] = useState(false);
  const theme = useSelector(state => state.theme);
  const color = useSelector(state => state.color);
  const chatHandler = text => {
    setText(''), setShowText(text);
    setIsChatting(true);
  };
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme === 'dark' ? colors.black : colors.white},
      ]}>
      <View style={styles.textContainer}>
        <View style={styles.guessText}>
          <Image
            style={styles.image}
            source={{uri: route.params?.item.image}}
          />
          <Text
            style={[
              styles.text,
              {
                color: theme === 'dark' ? colors.white : colors.black,
                backgroundColor: color,
              },
            ]}
            adjustsFontSizeToFit>
            {route.params.item.text}
          </Text>
        </View>
        {isChatting && (
          <View style={[styles.userText]}>
            <Image
              style={styles.image}
              source={require('../assets/profile-image.jpg')}
            />
            <Text
              style={[
                styles.text,
                {color: theme === 'dark' ? colors.white : colors.black},
              ]}>
              {showText}
            </Text>
          </View>
        )}
      </View>
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardVerticalOffset}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputText}>
        <TextInput
          placeholder="Nhap tin nhan"
          value={text}
          onChangeText={value => setText(value)}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => chatHandler(text)}>
          <Image
            source={require('../assets/button.jpg')}
            style={styles.button}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    marginRight: 15,
  },
  guessText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    alignSelf: 'flex-start',
  },
  userText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    alignSelf: 'flex-end',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
    borderRadius: 8,
    borderTopLeftRadius: 0,
    padding: 10,
  },
  inputText: {
    width: '100%',
    height: 50,
    backgroundColor: '#D0D3D4',
    borderRadius: 10,
  },
  submitBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    // padding: 10,
  },
});
export default TextScreen;
