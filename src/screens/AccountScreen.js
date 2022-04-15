import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';

import Color from '../config/utils/color';

const AccountScreen = () => {
  function AccountScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AccountScreenStatusBar />
      <Text style={{color: Color.TEXT_COLOR}}>
        Sorry! This screen is currently empty.
      </Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
