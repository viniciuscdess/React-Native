import firebase from 'firebase/app';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyDWjZ-zLNMP4819rsp0NtbPHOkx0-Zlohw",
    authDomain: "apploja-cab58.firebaseapp.com",
    projectId: "apploja-cab58",
    storageBucket: "apploja-cab58.appspot.com",
    messagingSenderId: "125304982068",
    appId: "1:125304982068:web:8ebdd9497c8e531ab91861",
    measurementId: "G-WQ5KRZF2XK"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;