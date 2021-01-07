import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyADqTbXdGOuHulNX3OE8GQdLHo8uT8iLuE",
    authDomain: "barterapp-27283.firebaseapp.com",
    databaseURL: "https://barterapp-27283.firebaseio.com",
    projectId: "barterapp-27283",
    storageBucket: "barterapp-27283.appspot.com",
    messagingSenderId: "142678984790",
    appId: "1:142678984790:web:0e725e288d66dafc65d3f7"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
