import {
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  Image,
  Text,
  RefreshControl,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

import { FetchSpecific } from '../config/api';
import Color from '../config/utils/color';
import BackdropNavigation from '../components/DetailScreen/BackdropNavigation';
import DetailBanner from '../components/DetailScreen/DetailBanner';
import BodyDetail from '../components/DetailScreen/BodyDetail';
import Loading from '../components/Loading';
import ActorListTitle, { styles } from '../components/DetailScreen/ActorList';

function DetailScreen({ route }) {
  const [data, getData] = useState(false);

  useEffect(() => {
    FetchSpecific.get(getData, route.params.movieId);
  }, []);

  function DetailScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    FetchSpecific.get(getData, route.params.movieId);
    setRefresh(false);
  };

  if (data) {
    return (
      <SafeAreaView style={styleContainer.container}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          columnWrapperStyle={{ marginHorizontal: moderateScale(18) }}
          numColumns={3}
          data={data.credits.cast}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={() => (
            <>
              <DetailScreenStatusBar />
              <BackdropNavigation movieData={data} />
              <DetailBanner movieData={data} />
              <BodyDetail movieData={data} />
              <ActorListTitle />
            </>
          )}
          renderItem={({ item }) => (
            <View style={styles.castContainer}>
              <Image
                source={{ uri: item.profile_path }}
                style={styles.castPicture}
              />
              <View style={styles.castNameContainer}>
                <Text style={styles.castName}>{item.name}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
  return <Loading />;
}

export default DetailScreen;

const styleContainer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
});
