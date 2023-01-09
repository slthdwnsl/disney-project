import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAtXgy_L-ExnXv-OGge1GkzEgjWb0X8VaU",
    authDomain: "disneyplus-7612f.firebaseapp.com",
    projectId: "disneyplus-7612f",
    storageBucket: "disneyplus-7612f.appspot.com",
    messagingSenderId: "788084347259",
    appId: "1:788084347259:web:fa13a79ece9916e1a8adde",
    measurementId: "G-WC863DKSB1"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;