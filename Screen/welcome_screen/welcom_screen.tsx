import React, { useState } from 'react';
import {Button, Image, SafeAreaView, Text, TouchableOpacity, View, useColorScheme} from 'react-native';
import { welcome_scree_dark,welcome_scree_light } from '../../styles/welcome_screen_styles/welcome_screen_style';
import Popup from '../../component/biometrics_config';
import Biometrics_Access from '../../component/biometrics_config';
import { Check_Pin } from '../../component/pin_config';

export const Welcome_Screen: React.FC = () => {
    var style_data;
    var check_pin_info = async() => await Check_Pin('');
    console.log(check_pin_info())
    const colorScheme = useColorScheme();
    colorScheme == 'light' ? style_data = welcome_scree_light : style_data = welcome_scree_dark 
    var [user_exist,set_user_exist] = useState(false)

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
          
        <TouchableOpacity style={style_data.touchContainer} onPress={user_exist=>set_user_exist(true)}>
      <Text style={style_data.buttonText}>Login</Text>
    </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
