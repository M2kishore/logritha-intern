// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCGVJMST9K0Rk9aRdQlvdOy9GN6BqpTnQ0",
    authDomain: "logintern-5b8b1.firebaseapp.com",
    projectId: "logintern-5b8b1",
    storageBucket: "logintern-5b8b1.appspot.com",
    messagingSenderId: "961871900360",
    appId: "1:961871900360:web:4e3ebf8220cc251cab7ffd"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default db;