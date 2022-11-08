import React from 'react';
import {View, Text, Touchable,Image, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-web';
//import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Signup = props => {
  return (
    //<Background>
      <View style={{alignItems: 'center', width: 47,paddingLeft:20
      }}>
        {/*
         <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 50,
          }}>
          Register
        </Text>*/ }
        { /*<Text
          style={{
            color: 'black',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 90,
          
            paddingTop: 200,

          }}>
          Create a new account
        </Text> */}
        <View
          style={{
            backgroundColor: '#ffebcd',
            height: 1200,
           width: 700,
            borderTopLeftRadius: 130,
            marginTop:0,
            marginLeft:100,
            marginRight:70,
            paddingLeft:300,
            paddingRight:40,
            
            paddingTop: 80,
            
            alignItems: 'center',
          }}>
          <View style={{marginTop:0, marginBottom:25}}>
         <Image style={{width: 110, height: 110, borderRadius:100}}  // required Dimensions and styling of Image
            source={require('../assets/logo_Bpit.png')} // enter your avatar image path 
            />
         </View>
          <Field
            placeholder="E-mail"
            keyboardType={'email-address'}
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              marginTop: 20,
             paddingLeft:25,
             paddingRight:25,
            }}>
        
            <Text style={{lineHeight: 21, fontSize: 15, marginBottom: 15, textAlign:'center'}}>
              <Text>By signing in, you agree to our</Text>
              <Text style={{color: 'teal',fontWeight: 'bold'}}> Terms & Conditions</Text>
              <Text> and </Text>
              <Text style={{color: 'teal', fontWeight: 'bold'}}>Privacy Policy</Text>           
            </Text>
          
          </View>

         
          
          <Btn style={{height:20}}
            textColor="white"
            bgColor='blue'
            btnLabel="Signup"
            
            Press={() => {
              alert('Account created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10
             // padding:50
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: 'blue', fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  //  </Background>
  );
};

export default Signup;