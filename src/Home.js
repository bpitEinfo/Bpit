import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

const Home = (props) => {
  return (
   
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#ffebcd'}}>
    <View style={{marginTop:5, marginBottom:-50}}>
    <Image style={{width: 200, height: 200, borderRadius:30,marginBottom:80}}  // required Dimensions and styling of Image
       source={require('../assets/logo_Bpit.png')} // enter your avatar image path 
       />
    </View>
    <Btn bgColor='blue' textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      
    </View>
   
  );
}
const styles = StyleSheet.create({})
export default Home;