// import { initializeApp } from "firebase/app";
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA4QV1f6MYMPJ8FVpN5LXclQrlW2hnTBYE",
  authDomain: "coffeehouse-c40bd.firebaseapp.com",
  projectId: "coffeehouse-c40bd",
  storageBucket: "coffeehouse-c40bd.appspot.com",
  messagingSenderId: "446026223250",
  appId: "1:446026223250:web:68ae6242f4b9d976f2204b"
};


// const app = initializeApp(firebaseConfig);

const fire = firebase.initializeApp(firebaseConfig);



export default fire;


