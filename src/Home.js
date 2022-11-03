import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginVertical: 400,padding:75,paddingTop:100}}>
      <Btn bgColor='blue' textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      {/* { <Btn bgColor='white' textColor='blue' btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} /> } */}
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({})
export default Home;