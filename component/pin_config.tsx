import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, Button, Text, TextInput, View} from 'react-native';

export const Check_Pin = async (value: string) => {
  var return_value: boolean;
  await AsyncStorage.getItem('pin_code')
    .then(data => {
      data ? (return_value = true) : (return_value = false);
      return return_value;
    })
    .catch(err => {});
};

export const Set_Pin = async (value: string) => {
  var return_value: boolean;
  await AsyncStorage.setItem('pinCode', `${value}`)
    .then(data => {
      data == undefined ? (return_value = true) : (return_value = false);
      return return_value;
    })
    .catch(err => {});
};

const PinCode = () => {
  const [pinCode, setPinCode] = useState('');

  const setPinCodeHandler = async (pinCodess: any) => {
    var value: any = await AsyncStorage.getItem('pinCode');
    if (value) {
      if (value !== null) {
        console.log(value);
        try {
          const jsonString = JSON.stringify(value);
          const parsedObject = JSON.parse(jsonString);
          console.log(parsedObject);
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log('no data');
        AsyncStorage.setItem('pinCode', `${pinCodess}`).then(data1 => {
          console.log(JSON.stringify(data1));
        });
      }
    }
  };

  return (
    <View>
      <Text>Please set your pin code</Text>
      <TextInput
        placeholder="Pin Code"
        value={pinCode}
        onChangeText={pinCode => {
          setPinCode(pinCode);
        }}
      />
      <Button title="Set Pin Code" onPress={setPinCodeHandler} />
    </View>
  );
};

export default PinCode;
