import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 18,
        paddingTop: 4,
        width: 210,
        paddingBottom: 8,
        marginVertical: 10
      }}>
      <Text style={{color: textColor, fontSize: 21,textAlign:'center',alignSelf:'center',alignItems:'center',justifyContent:'center',fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}