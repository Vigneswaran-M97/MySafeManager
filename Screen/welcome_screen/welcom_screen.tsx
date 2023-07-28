import React, { useState } from 'react';
import {Button, Image, SafeAreaView, Text, TouchableOpacity, View, useColorScheme} from 'react-native';
import { welcome_scree_dark,welcome_scree_light } from '../../styles/welcome_screen_styles/welcome_screen_style';
import Popup from '../../component/popup_mean_screen';
import SimplePopup from '../../component/popup_mean_screen';

export const Welcome_Screen: React.FC = () => {
    var style_data;
    const colorScheme = useColorScheme();
    colorScheme == 'light' ? style_data = welcome_scree_light : style_data = welcome_scree_dark 
    const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };


  return (
    <SafeAreaView style={style_data.mainContainer}>
      <View>
        <View>
          <Image
            source={require('../../assets/welcome_screen_image/img_1.png')}
          />
        </View>
        <View>
          <Text style={style_data.headingContainer}>Safe Manager</Text>
        </View>
        <View style={style_data.buttonContainer}>
        <TouchableOpacity style={style_data.touchContainer} onPress={SimplePopup}>
      <Text style={style_data.buttonText}>Login</Text>
    </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
