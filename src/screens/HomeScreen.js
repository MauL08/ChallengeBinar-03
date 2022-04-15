import {StyleSheet, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {FetchAll} from '../config/api/index';
import Color from '../config/utils/color';

import Header from '../components/HomeScreen/Header';
import Recommended from '../components/HomeScreen/Recommended';
import Latest from '../components/HomeScreen/Latest';
import Loading from '../components/Loading';

const HomeScreen = () => {
  const [token, setToken] = useState(false);
  const [data, getData] = useState(false);

  useEffect(() => {
    getToken();
    FetchAll.get(getData);
  }, []);

  const getToken = async () => {
    try {
      const data = await AsyncStorage.getItem('token');
      if (data !== null) {
        setToken(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function HomeScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  if (data && token) {
    return (
      <SafeAreaView style={styles.container}>
        <HomeScreenStatusBar />
        <Header />
        <Recommended data={data.results} />
        <Latest data={data.results} />
      </SafeAreaView>
    );
  } else {
    return <Loading />;
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
});
