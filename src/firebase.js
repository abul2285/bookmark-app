// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/database";
const config = {
  apiKey: "AIzaSyBc8jvdTU-s1GwdPW9nrc5UvW5va3OVWSE",
  authDomain: "react-pwa-c2c58.firebaseapp.com",
  databaseURL: "https://react-pwa-c2c58.firebaseio.com",
  projectId: "react-pwa-c2c58",
  storageBucket: "react-pwa-c2c58.appspot.com",
  messagingSenderId: "992024411955",
  appId: "1:992024411955:web:c24624be8c3b54f6494846"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const bookmarksRef = databaseRef.child("bookmarks");
