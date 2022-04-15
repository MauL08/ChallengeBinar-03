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
import React, {useState} from 'react';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {AUTH_API} from '@env';

import Loading from '../../components/Loading';
import Logo from '../../assets/images/banner.png';
import Color from '../../config/utils/color';

const {width} = Dimensions.get('screen');

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [formScreen, setFormScreen] = useState(true);

  const StatusBarScreen = () => {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  };

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [latLoc, setLatLoc] = useState('');
  const [longLoc, setLongLoc] = useState('');
  const [password, setPassword] = useState('');

  function validateEmail(email) {
    const emailRegEx = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]/;
    const emailCheck = emailRegEx.test(email);

    if (emailCheck) {
      const content = {
        email: email,
        username: username,
        password: password,
        name: {
          firstname: firstName,
          lastname: lastName,
        },
        address: {
          city: city,
          street: street,
          number: number,
          zipcode: zipcode,
          geolocation: {
            lat: latLoc,
            long: longLoc,
          },
        },
        phone: phone,
      };

      return content;
    } else {
      return null;
    }
  }

  const registerAuth = async () => {
    setFormScreen(false);
    const content = validateEmail(email);
    await axios
      .post(`${AUTH_API}/users`, content)
      .then(res => {
        if (res.status <= 201) {
          Alert.alert('Thank You', 'Register Success!', [{text: 'OK'}]);
        }
        console.log(res.data);
      })
      .catch(err => {
        Alert.alert('Error', 'Register Failed! Please try again :)', [
          {text: 'OK'},
        ]);
        console.log(err);
      })
      .finally(() => {
        setFormScreen(true);
      });
  };

  const [inputEmail, setInputEmail] = useState(false);
  const [inputUsername, setInputUsername] = useState(false);
  const [inputPhone, setInputPhone] = useState(false);
  const [inputFirstName, setInputFirstName] = useState(false);
  const [inputLastName, setInputLastName] = useState(false);
  const [inputCity, setInputCity] = useState(false);
  const [inputStreet, setInputStreet] = useState(false);
  const [inputNumber, setInputNumber] = useState(false);
  const [inputZipcode, setInputZipcode] = useState(false);
  const [inputLatLoc, setInputLatLoc] = useState(false);
  const [inputLongLoc, setInputLongLoc] = useState(false);
  const [inputPw, setInputPw] = useState(false);

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
              Register Screen
            </Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.emailInputContainer}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                onChangeText={text => setEmail(text)}
                style={styles.inputFormEmail(inputEmail)}
                onFocus={() => setInputEmail(true)}
                onBlur={() => setInputEmail(false)}
              />
            </View>
            <View style={styles.usernameInputContainer}>
              <Text style={styles.inputText}>Username</Text>
              <TextInput
                onChangeText={text => setUsername(text)}
                style={styles.inputFormUsername(inputUsername)}
                onFocus={() => setInputUsername(true)}
                onBlur={() => setInputUsername(false)}
              />
            </View>
            <View style={styles.phoneInputContainer}>
              <Text style={styles.inputText}>Phone Number</Text>
              <TextInput
                onChangeText={text => setPhone(text)}
                keyboardType="numeric"
                style={styles.inputFormPhone(inputPhone)}
                onFocus={() => setInputPhone(true)}
                onBlur={() => setInputPhone(false)}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <View style={styles.firstNameInputContainer}>
                <Text style={styles.inputText}>First Name</Text>
                <TextInput
                  onChangeText={text => setFirstName(text)}
                  style={styles.inputFormFirstName(inputFirstName)}
                  onFocus={() => setInputFirstName(true)}
                  onBlur={() => setInputFirstName(false)}
                />
              </View>
              <View style={styles.lastNameInputContainer}>
                <Text style={styles.inputText}>Last Name</Text>
                <TextInput
                  onChangeText={text => setLastName(text)}
                  style={styles.inputFormLastName(inputLastName)}
                  onFocus={() => setInputLastName(true)}
                  onBlur={() => setInputLastName(false)}
                />
              </View>
            </View>
            <View style={styles.cityInputContainer}>
              <Text style={styles.inputText}>City</Text>
              <TextInput
                onChangeText={text => setCity(text)}
                style={styles.inputFormCity(inputCity)}
                onFocus={() => setInputCity(true)}
                onBlur={() => setInputCity(false)}
              />
            </View>
            <View style={styles.streetInputContainer}>
              <Text style={styles.inputText}>Street</Text>
              <TextInput
                onChangeText={text => setStreet(text)}
                style={styles.inputFormStreet(inputStreet)}
                onFocus={() => setInputStreet(true)}
                onBlur={() => setInputStreet(false)}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <View style={styles.numberInputContainer}>
                <Text style={styles.inputText}>Number</Text>
                <TextInput
                  onChangeText={text => setNumber(text)}
                  keyboardType="numeric"
                  style={styles.inputFormNumber(inputNumber)}
                  onFocus={() => setInputNumber(true)}
                  onBlur={() => setInputNumber(false)}
                />
              </View>
              <View style={styles.zipcodeInputContainer}>
                <Text style={styles.inputText}>Zip Code</Text>
                <TextInput
                  onChangeText={text => setZipcode(text)}
                  keyboardType="numeric"
                  style={styles.inputFormZipcode(inputZipcode)}
                  onFocus={() => setInputZipcode(true)}
                  onBlur={() => setInputZipcode(false)}
                />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <View style={styles.latlocInputContainer}>
                <Text style={styles.inputText}>Lattitude</Text>
                <TextInput
                  onChangeText={text => setLatLoc(text)}
                  style={styles.inputFormLatLoc(inputLatLoc)}
                  onFocus={() => setInputLatLoc(true)}
                  onBlur={() => setInputLatLoc(false)}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.longlocInputContainer}>
                <Text style={styles.inputText}>Longitude</Text>
                <TextInput
                  onChangeText={text => setLongLoc(text)}
                  style={styles.inputFormLongLoc(inputLongLoc)}
                  onFocus={() => setInputLongLoc(true)}
                  onBlur={() => setInputLongLoc(false)}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.pWInputContainer}>
              <Text style={styles.inputText}>Password</Text>
              <TextInput
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                style={styles.inputFormPW(inputPw)}
                onFocus={() => setInputPw(true)}
                onBlur={() => setInputPw(false)}
              />
            </View>

            <View style={styles.optionContainer}>
              <Text style={styles.optionTextGuide}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.optionText}>Login here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={registerAuth}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  } else {
    return <Loading />;
  }
};

export default RegisterScreen;

const baseFormStyles = {
  borderWidth: moderateScale(3),
  borderRadius: moderateScale(10),
  paddingHorizontal: moderateScale(18),
  fontSize: moderateScale(14),
  marginBottom: moderateScale(14),
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.BACKGROUND_COLOR,
  },
  semiContainer: {
    marginTop: moderateScale(40),
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
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    color: Color.ACTIVE_BUTTON_COLOR,
    marginBottom: moderateScale(2),
  },
  inputFormEmail: focus => ({
    ...baseFormStyles,
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
    width: moderateScale(260),
  }),
  inputFormUsername: focus => ({
    ...baseFormStyles,
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
    width: moderateScale(260),
  }),
  inputFormPhone: focus => ({
    ...baseFormStyles,
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
    width: moderateScale(260),
  }),
  inputFormFirstName: focus => ({
    ...baseFormStyles,
    width: moderateScale(130),
    marginRight: moderateScale(4),
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  inputFormLastName: focus => ({
    ...baseFormStyles,
    width: moderateScale(130),
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  inputFormCity: focus => ({
    ...baseFormStyles,
    width: moderateScale(260),
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  inputFormStreet: focus => ({
    ...baseFormStyles,
    width: moderateScale(260),
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  inputFormNumber: focus => ({
    ...baseFormStyles,
    width: moderateScale(130),
    marginRight: moderateScale(4),
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  inputFormZipcode: focus => ({
    ...baseFormStyles,
    width: moderateScale(130),
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  inputFormLatLoc: focus => ({
    ...baseFormStyles,
    marginRight: moderateScale(4),
    width: moderateScale(130),
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  inputFormLongLoc: focus => ({
    ...baseFormStyles,
    width: moderateScale(130),
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  inputFormPW: focus => ({
    ...baseFormStyles,
    width: moderateScale(260),
    backgroundColor: focus ? 'white' : Color.CONTAINER_COLOR,
    borderColor: focus ? Color.ACTIVE_BUTTON_COLOR : 'black',
    color: Color.DISABLE_BUTTON_COLOR,
  }),
  optionContainer: {
    flexDirection: 'row',
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
    marginTop: moderateScale(48),
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
