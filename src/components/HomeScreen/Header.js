import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

import {Logo, SearchIcon, ListIcon} from '../../assets/index';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={ListIcon} />
      </TouchableOpacity>
      <Image source={Logo} />
      <TouchableOpacity>
        <Image source={SearchIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: moderateScale(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
