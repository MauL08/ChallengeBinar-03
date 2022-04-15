import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

import Color from '../../config/utils/color';

const BodyDetail = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.genreTitle}>Genres</Text>
      <View style={styles.genreContainer}>
        <FlatList
          scrollEnabled={false}
          horizontal={true}
          data={props.movieData.genres}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.genreItemContainer}>
              <Text style={styles.genreItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.synopshisContainer}>
        <Text style={styles.synopshisTitle}>Synopsis</Text>
        <View style={styles.synopshisTextContainer}>
          <Text style={styles.synopshisText}>{props.movieData.overview}</Text>
        </View>
      </View>
    </View>
  );
};

export default BodyDetail;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(20),
  },
  genreTitle: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    textAlign: 'center',
    padding: moderateScale(8),
    borderRadius: moderateScale(8),
    color: Color.TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  genreContainer: {
    marginTop: moderateScale(12),
    flexWrap: 'wrap',
  },
  genreItemContainer: {
    backgroundColor: Color.CONTAINER_COLOR,
    marginRight: moderateScale(8),
    paddingVertical: moderateScale(4),
    paddingHorizontal: moderateScale(6),
    borderRadius: moderateScale(10),
  },
  genreItem: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(11),
  },
  synopshisContainer: {
    marginTop: moderateScale(12),
  },
  synopshisTitle: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    textAlign: 'center',
    padding: moderateScale(8),
    borderRadius: moderateScale(8),
    color: Color.TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  synopshisTextContainer: {
    marginTop: moderateScale(12),
  },
  synopshisText: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(11),
    textAlign: 'justify',
  },
});
