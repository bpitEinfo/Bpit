import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 14, color: darkGreen, paddingHorizontal: 20,paddingVertical:20, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10,fontSize:16}}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;