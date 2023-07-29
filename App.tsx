/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Welcome_Screen} from './Screen/welcome_screen/welcom_screen';
import PinCode from './component/pin_config';

const App = () => {
  return (
    <SafeAreaView>
      <Welcome_Screen />
    </SafeAreaView>
  );
};
export default App;
