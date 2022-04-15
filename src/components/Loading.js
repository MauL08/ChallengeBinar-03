import {StatusBar} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';

import {HandAnimation} from '../assets';
import Color from '../config/utils/color';
import LottieView from 'lottie-react-native';

const Loading = () => {
  function LoadingScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  return (
    <>
      <LoadingScreenStatusBar />
      <LottieView
        source={HandAnimation}
        autoPlay
        loop
        style={{backgroundColor: Color.BACKGROUND_COLOR}}
      />
    </>
  );
};

export default Loading;
