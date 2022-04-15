import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Alert,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_API } from '@env';

import Logo from '../../assets/images/banner.png';
import Loading from '../../components/Loading';
import Color from '../../config/utils/color';

const { width } = Dimensions.get('screen');

const LoginScreen = () => {
  const navigation = useNavigation();
  const [formScreen, setFormScreen] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm(username, password) {
    if (username.length === 0 && password.length === 0) {
      Alert.alert('Error', 'Please fill form correctly!', [
        { text: 'OK', onPress: () => setFormScreen(true) },
      ]);
      return null;
    } else {
      const content = {
        username: username, // mor_2314
        password: password, // 83r5^_
      };

      return content;
    }
  }

  const loginAuth = async () => {
    setFormScreen(false);
    const content = validateForm(username, password);
    await axios
      .post(`${AUTH_API}/auth/login`, content)
      .then(res => {
        if (res.status <= 201) {
          AsyncStorage.setItem('token', res.data.token);
          navigation.navigate('Main');
        }
      })
      .catch(err => {
        Alert.alert('Error', 'Login Failed! Please try again :)', [
          { text: 'OK' },
        ]);
        console.log(err);
      })
      .finally(() => {
        setFormScreen(true);
      });
  };

  const StatusBarScreen = () => {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  };

  const [inputUser, setInputUser] = useState(false);
  const [inputPass, setInputPass] = useState(false);

  if (formScreen) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBarScreen />
        <View style={styles.semiContainer}>
          <Image style={styles.imageLogo} source={Logo} />
          <View
            style={{
              backgroundColor: 'blue',
              marginTop: moderateScale(30),
              padding: moderateScale(12),
              borderRadius: moderateScale(6),
              borderWidth: 2,
              borderColor: Color.ACTIVE_BUTTON_COLOR,
              backgroundColor: 'black',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: Color.ACTIVE_BUTTON_COLOR,
                fontWeight: 'bold',
                fontSize: moderateScale(16),
              }}>
              Login Screen
            </Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.usernameInputContainer}>
              <Text style={styles.inputText}>Username</Text>
              <TextInput
                onChangeText={value => setUsername(value)}
                style={styles.inputFormUser(inputUser)}
                onFocus={() => setInputUser(true)}
                onBlur={() => setInputUser(false)}
              />
            </View>
            <View style={styles.passwordInputContainer}>
              <Text style={styles.inputText}>Password</Text>
              <TextInput
                onChangeText={value => setPassword(value)}
                style={styles.inputFormPass(inputPass)}
                secureTextEntry={true}
                onFocus={() => setInputPass(true)}
                onBlur={() => setInputPass(false)}
              />
            </View>
            <View style={styles.optionContainer}>
              <Text style={styles.optionTextGuide}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.optionText}>Register here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={loginAuth}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  } else {
    return <Loading />;
  }
};

export default LoginScreen;

const baseFormStyles = {
  borderWidth: moderateScale(3),
  borderRadius: moderateScale(10),
  paddingHorizontal: moderateScale(18),
  fontSize: moderateScale(14),
  width: moderateScale(260),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.BACKGROUND_COLOR,
  },
  semiContainer: {
    marginTop: moderateScale(48),
  },
  imageLogo: {
    height: moderateScale(90),
    width: moderateScale(238),
  },
  formContainer: {
    marginTop: moderateScale(20),
  },
  passwordInputContainer: {
    marginTop: moderateScale(12),
  },
  inputText: {
    marginBottom: moderateScale(8),
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    color: Color.ACTIVE_BUTTON_COLOR,
    marginBottom: moderateScale(2),
  },
  inputFormUser: focus => ({
    ...baseFormStyles,
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  inputFormPass: focus => ({
    ...baseFormStyles,
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  optionContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(12),
    justifyContent: 'center',
  },
  optionTextGuide: {
    marginRight: moderateScale(6),
    color: 'white',
  },
  optionText: {
    fontWeight: 'bold',
    color: Color.ACTIVE_BUTTON_COLOR,
  },
  loginButton: {
    backgroundColor: Color.ACTIVE_BUTTON_COLOR,
    width: width - 80,
    marginBottom: moderateScale(20),
    borderRadius: moderateScale(6),
    padding: moderateScale(10),
    elevation: moderateScale(8),
  },
  loginButtonText: {
    color: Color.CONTAINER_COLOR,
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
