import React  from "react";
//import { nativeViewGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler";
import {View,Text,SafeAreaView,StyleSheet} from 'react-native';
import Btn from './Btn';



const Profile = () => {
    return (
       <View 
       style= {{}}>
        <Text> Profile Screen</Text>
        <Btn textColor='white' bgColor='#0F78D8' btnLabel="clickhere" Press={() => alert("Button Clicked")} 
        />
        </View> 
    )
}

export default Profile;

