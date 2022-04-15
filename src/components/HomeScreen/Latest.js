import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

import Color from '../../config/utils/color';
import MovieList from '../MovieList';

const Latest = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Latest Updates</Text>
      <MovieList data={props.data} />
    </View>
  );
};

export default Latest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    marginLeft: moderateScale(16),
  },
});
