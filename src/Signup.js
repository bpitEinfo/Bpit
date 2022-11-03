import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
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
            
            paddingTop: 100,
            
            alignItems: 'center',
          }}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
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
            <Text style={{color: 'grey', fontSize: 14}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>
              Terms & Conditions
            </Text>
          
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 14}}>
              and {" "}
            </Text>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>
              Privacy Policy
            </Text>
          </View>
          
          <Btn style={{height:15}}
            textColor="white"
            bgColor='blue'
            btnLabel="Signup"
            
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
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