import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({ children }) => {
  return (
    <View  style={{backgroundColor:'#ffebcd',height:'100%'}}>
      <ImageBackground source={require("../assets/logo_Bpit.png")} style={{ height: '50%',width:'100%' ,marginTop:200,marginBottom:50,borderRadius:'50%'}} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}

export default Background;