var firebase = require('firebase');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDZZp1ffnpO1zbSum_MIH20N_4oyZrWr0Q",
  authDomain: "ziedpersonal.firebaseapp.com",
  databaseURL: "https://ziedpersonal.firebaseio.com",
  storageBucket: "ziedpersonal.appspot.com",
  messagingSenderId: "566310172429"
};
var app = firebase.initializeApp(config);

 const container = document.getElementById("container");
const dbRefContainer = firebase.database().ref().child('container');
