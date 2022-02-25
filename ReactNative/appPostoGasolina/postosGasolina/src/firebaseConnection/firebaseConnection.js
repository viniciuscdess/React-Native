import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyA0DbfyawiMIUjgZovEJYS1ymvuSccohuM",
    authDomain: "postosgasolina-81c42.firebaseapp.com",
    projectId: "postosgasolina-81c42",
    storageBucket: "postosgasolina-81c42.appspot.com",
    messagingSenderId: "700944293651",
    appId: "1:700944293651:web:001a9267e468efbeb304e6",
    measurementId: "G-17WBXTV80Q"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;