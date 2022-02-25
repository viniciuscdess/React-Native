import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAxDx6Xhk5NDSY0lP-texofcyQDpzP2mt0",
    authDomain: "todo-90a23.firebaseapp.com",
    projectId: "todo-90a23",
    storageBucket: "todo-90a23.appspot.com",
    messagingSenderId: "671958528509",
    appId: "1:671958528509:web:d23612003b122ce55a6994",
    measurementId: "G-EVT979LPBV"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;