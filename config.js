//firebase config keysetup

import  firebase from 'firebase/compat/app';
import 'firebase/compat/app' ;
import 'firebase/compat/firestore' ;

//your web app;s firebase configuration
const firebaseConfig={
    apiKey: "AIzaSyDgq_Nhf8-ckpYI3EPUzkCU3gDNaMhYbHk",
  authDomain: "bpit-3995f.firebaseapp.com",
  projectId: "bpit-3995f",
  storageBucket: "bpit-3995f.appspot.com",
  messagingSenderId: "657662520777",
  appId: "1:657662520777:web:58937f812d7834cebecc18",
  measurementId: "G-1YT41H7LGM"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};