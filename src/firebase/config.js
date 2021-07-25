import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD7oSxfA3pNRChXy67BlIIxcwgJQAjxHEk",
  authDomain: "react-gallery-9bc03.firebaseapp.com",
  projectId: "react-gallery-9bc03",
  storageBucket: "react-gallery-9bc03.appspot.com",
  messagingSenderId: "1081176245449",
  appId: "1:1081176245449:web:4b2c35ce75d6861325b918",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };
