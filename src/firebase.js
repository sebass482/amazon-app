import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAwR5NQz0k5DoH4tXGbmt6TW-yrRiDa5QI",
    authDomain: "project-b5a5b.firebaseapp.com",
    databaseURL: "https://project-b5a5b.firebaseio.com",
    projectId: "project-b5a5b",
    storageBucket: "project-b5a5b.appspot.com",
    messagingSenderId: "157143182261",
    appId: "1:157143182261:web:e908ef15f5875b433687fc",
    measurementId: "G-20TNRSPCBK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()

  export {db, auth}
