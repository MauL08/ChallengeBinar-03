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

import Color from '../../config/utils/color';
import {RateIcon} from '../../assets/index';

const Recommended = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.pageTitle}>Recommended</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={props.data}
        keyExtractor={item => item.id}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.posterContainer}
            onPress={() => navigation.navigate('Detail', {movieId: item.id})}>
            <Image
              style={styles.posterImage}
              source={{uri: item.poster_path}}
            />
            <Text style={styles.posterText}>{item.title}</Text>
            <View style={styles.ratingContainer}>
              <Image source={RateIcon} style={styles.rateIcon} />
              <Text style={styles.ratingText}>{item.vote_average}/10</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  pageTitle: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    marginTop: moderateScale(16),
    marginLeft: moderateScale(16),
  },
  posterContainer: {
    marginHorizontal: moderateScale(12),
    marginTop: moderateScale(16),
    marginBottom: moderateScale(24),
    width: moderateScale(150),
  },
  posterImage: {
    height: moderateScale(220),
    borderRadius: moderateScale(10),
  },
  posterText: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(12),
    marginTop: moderateScale(12),
    fontWeight: 'bold',
  },
  ratingContainer: {
    marginTop: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateIcon: {
    marginRight: moderateScale(5),
  },
  ratingText: {
    color: Color.TEXT_COLOR,
    fontSize: moderateScale(12),
  },
});
