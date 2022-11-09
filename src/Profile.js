import React  from "react";
//import { nativeViewGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler";
import {View,Text,SafeAreaView,StyleSheet } from 'react-native';
import {
    Image,
    TouchableOpacity
  } from 'react-native';
import Btn from './Btn';
import Field from "./Field";
import {Form,FormItem} from 'react-native-form-component';


const Profile = (props) => {
    return (
       <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#ffebcd'}}>
         <View style={{marginTop:5, marginBottom:-50}}>
         <Image style={{width: 110, height: 110, borderRadius:100}}  // required Dimensions and styling of Image
            source={require('../assets/logo_Bpit.png')} // enter your avatar image path 
            />
         </View>
         
         <View style={{width:300, marginTop:100}}>
           
            <Form>
            
    <FormItem placeholder="Registration No."/>
    <FormItem placeholder="Father's Name"/>
    <FormItem placeholder="Address"/>
    <FormItem placeholder="Course"/>
    <FormItem placeholder="Roll No."/>
    <FormItem placeholder="Blood Group"/>
   
  </Form>
         </View>
         <Btn style={{height:20}}
            textColor="white"
            bgColor='blue'
            btnLabel="Qr_code"
            
            Press={() => {
              alert('Qr_Code created');
              props.navigation.navigate('Qrcode');
            }}
          />
        </View> 
    )
}

export default Profile;

