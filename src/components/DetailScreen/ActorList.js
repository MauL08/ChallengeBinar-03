import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

import Color from '../../config/utils/color';

const ActorListTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.castListTitle}>Actor / Artist</Text>
    </View>
  );
};

export default ActorListTitle;

export const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(12),
    marginHorizontal: moderateScale(20),
  },
  castListTitle: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    textAlign: 'center',
    padding: moderateScale(8),
    borderRadius: moderateScale(8),
    color: Color.TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    marginBottom: moderateScale(12),
  },
  castContainer: {
    alignItems: 'center',
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(8),
    marginRight: moderateScale(8),
    padding: moderateScale(8),
  },
  castPicture: {
    height: moderateScale(120),
    width: moderateScale(90),
    borderRadius: moderateScale(4),
  },
  castNameContainer: {
    backgroundColor: Color.CONTAINER_COLOR,
    borderRadius: moderateScale(4),
    padding: moderateScale(2),
    width: moderateScale(90),
    marginTop: moderateScale(5),
  },
  castName: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(11),
    textAlign: 'center',
  },
});
