import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';

import Genre from '../models/genre';
import Color from '../config/utils/color';
import * as Date from '../config/utils/changeDate';
import {RateIcon} from '../assets/';

const MovieList = props => {
  const navigation = useNavigation();

  const Genres = props => {
    let keys = props.keys;
    let list = props.list;

    return keys.map((key, index) => {
      let genre = Object.keys(list).find(data => list[data] === key);

      return (
        <View style={styles.genreSemiContainer} key={index}>
          <Text style={styles.genreText}>{genre}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.listParent}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.listContainer}>
            <Image
              source={{uri: item.poster_path}}
              style={styles.imagePoster}
            />
            <View style={styles.detailContainer}>
              <Text style={styles.detailTitle}>{item.title}</Text>
              <Text style={styles.detailDate}>
                Released on {Date.changeDate(item.release_date)}
              </Text>
              <View style={styles.ratingContainer}>
                <Image source={RateIcon} style={styles.ratingIcon} />
                <Text style={styles.ratingText}>{item.vote_average}/10</Text>
              </View>
              <View style={styles.genreContainer}>
                <Genres keys={item.genre_ids} list={Genre} />
              </View>
              <View style={styles.showButtonContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detail', {movieId: item.id})
                  }
                  style={styles.showButton}>
                  <Text style={styles.showButtonText}>Show More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  listParent: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(16),
    marginBottom: moderateScale(24),
  },
  listContainer: {
    backgroundColor: Color.CONTAINER_COLOR,
    marginBottom: moderateScale(12),
    padding: moderateScale(16),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    elevation: 2,
  },
  imagePoster: {
    height: moderateScale(150),
    width: moderateScale(100),
    borderRadius: moderateScale(10),
  },
  detailContainer: {
    width: moderateScale(220),
    marginLeft: moderateScale(16),
  },
  detailTitle: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(14),
    marginBottom: moderateScale(4),
    fontWeight: 'bold',
    width: moderateScale(200),
  },
  detailDate: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(10),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(4),
  },
  ratingIcon: {
    marginRight: moderateScale(3),
  },
  ratingText: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(10),
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: moderateScale(3),
  },
  genreSemiContainer: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(8),
    marginVertical: moderateScale(5),
  },
  genreText: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(10),
  },
  showButtonContainer: {
    alignItems: 'flex-start',
    marginTop: moderateScale(3),
  },
  showButton: {
    backgroundColor: Color.ACTIVE_BUTTON_COLOR,
    padding: moderateScale(4),
    borderRadius: moderateScale(5),
  },
  showButtonText: {
    color: Color.DISABLE_BUTTON_COLOR,
    fontWeight: 'bold',
    fontSize: moderateScale(11),
  },
});
