import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

import Color from '../../config/utils/color';
import * as Date from '../../config/utils/changeDate';
import * as Time from '../../config/utils/runtime';
import {RateIcon, TimeIcon} from '../../assets';

const DetailBanner = props => {
  return (
    <View style={styles.detailContainer}>
      <Image
        source={{uri: props.movieData.poster_path}}
        style={styles.imagePoster}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.titleName}>{props.movieData.original_title}</Text>
        <Text style={styles.titleTagline}>{props.movieData.tagline}</Text>
        <View style={styles.releaseContainer}>
          <Text style={styles.titleStatus}>{props.movieData.status}</Text>
          <Text style={styles.titleDate}>
            {Date.changeDate(props.movieData.release_date)}
          </Text>
        </View>
        <View style={styles.rateTimeContainer}>
          <View style={styles.rateContainer}>
            <Image source={RateIcon} />
            <Text style={styles.titleRating}>
              {props.movieData.vote_average}/10
            </Text>
          </View>
          <View style={styles.timeContainer}>
            <Image
              source={TimeIcon}
              style={{tintColor: 'white', width: 12, height: 12}}
            />
            <Text style={styles.titleTime}>
              {Time.changeRuntime(props.movieData.runtime)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailBanner;

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: Color.CONTAINER_COLOR,
    padding: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    elevation: moderateScale(4),
    marginHorizontal: moderateScale(12),
    marginTop: moderateScale(-50),
  },
  imagePoster: {
    height: moderateScale(160),
    width: moderateScale(100),
    borderRadius: moderateScale(10),
  },
  infoContainer: {
    marginLeft: moderateScale(16),
    width: moderateScale(200),
  },
  titleName: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  titleTagline: {
    marginTop: moderateScale(10),
    backgroundColor: Color.ACTIVE_BUTTON_COLOR,
    padding: moderateScale(2),
    borderRadius: moderateScale(10),
    textAlign: 'center',
    color: Color.CONTAINER_COLOR,
    fontSize: moderateScale(11),
    fontWeight: 'bold',
  },
  releaseContainer: {
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStatus: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    color: Color.TEXT_COLOR,
    paddingVertical: moderateScale(3),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
    fontSize: moderateScale(11),
  },
  titleDate: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    color: Color.TEXT_COLOR,
    paddingVertical: moderateScale(3),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
    fontSize: moderateScale(11),
  },
  rateTimeContainer: {
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateContainer: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    paddingVertical: moderateScale(3),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleRating: {
    marginLeft: moderateScale(4),
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(11),
  },
  timeContainer: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    paddingVertical: moderateScale(3),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTime: {
    marginLeft: moderateScale(4),
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(11),
  },
});
