// import firebase from 'firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAZVW9AY2qdKcpxiMZBVUantY2OiaLGnXw",
    authDomain: "final-task-48ce0.firebaseapp.com",
    projectId: "final-task-48ce0",
    storageBucket: "final-task-48ce0.appspot.com",
    messagingSenderId: "758250988271",
    appId: "1:758250988271:web:f76b4e85a233c42a26311a",
    measurementId: "G-FM5KZ88GJX"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage = firebase.storage();

  export {auth, fs, storage}
  