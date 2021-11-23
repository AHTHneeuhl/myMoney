import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVOEJOke55BVC1Hd5_0CkTOyhurUUVE5Q",
  authDomain: "mymoney-a4575.firebaseapp.com",
  projectId: "mymoney-a4575",
  storageBucket: "mymoney-a4575.appspot.com",
  messagingSenderId: "944040333983",
  appId: "1:944040333983:web:a820ee991a30b6ddc5c8aa",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamps
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
