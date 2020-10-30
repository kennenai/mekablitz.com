import firebase from 'firebase'
// Required for side-effects
import 'firebase/analytics';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyB_tPkjFSrZW9vAHEikgJW5-ld0lVR0XGo",
  authDomain: "mekablitz-f54cf.firebaseapp.com",
  databaseURL: "https://mekablitz-f54cf.firebaseio.com",
  projectId: "mekablitz-f54cf",
  storageBucket: "mekablitz-f54cf.appspot.com",
  messagingSenderId: "862467417094",
  appId: "1:862467417094:web:f08e4174aef17773c5cf87",
  measurementId: "G-760EQNB43E"
});

export { firebase }