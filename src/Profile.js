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


const Profile = () => {
    return (
       <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#ffebcd'}}>
         <View style={{marginTop:63, marginBottom:-72}}>
         <Image style={{width: 100, height: 100, borderRadius:100}}  // required Dimensions and styling of Image
            source={require('../assets/logo_Bpit.png')} // enter your avatar image path 
            />
         </View>
         
         <View style={{width:300, marginTop:100}}>
           
            <Form onButtonPress={() => alert('Form succesfully submited')}
            buttonText="Submit" buttonStyle={{backgroundColor:'blue'}}>
            
    <FormItem placeholder="Registration No."/>
    <FormItem placeholder="Father's Name"/>
    <FormItem placeholder="Address"/>
    <FormItem placeholder="Course"/>
    <FormItem placeholder="Roll No."/>
    <FormItem placeholder="Blood Group"/>
   
  </Form>
         </View>
        </View> 
    )
}

export default Profile;

