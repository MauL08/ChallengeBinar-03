import {Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';

import Router from './config/router';

const App = () => {
  const [netStatus, setNetStatus] = useState(true);

  const connection = NetInfo.fetch().then(state => {
    return state.isConnected;
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    connection.then(res => {
      setNetStatus(res);
    });
  }, [netStatus]);

  return (
    <NavigationContainer>
      {netStatus ? <Router /> : Alert.alert('ERROR', 'NO INTERNET CONNECTION')}
    </NavigationContainer>
  );
};

export default App;
