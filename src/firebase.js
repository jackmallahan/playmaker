import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC3yLYZ-Ij4InUoLCwYJiU-iRT97YEMnWg",
  authDomain: "playmaker-a61ef.firebaseapp.com",
  databaseURL: "https://playmaker-a61ef.firebaseio.com",
  projectId: "playmaker-a61ef",
  storageBucket: "",
  messagingSenderId: "196518675813"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = () => auth.signInWithPopup(googleProvider);

export const signOut = () => auth.signOut();

export default firebase;
