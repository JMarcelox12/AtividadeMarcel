// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJhr9MG-ytfmpEvTF6CJHOlz0cHib0e7o",
  authDomain: "jjay-9925d.firebaseapp.com",
  projectId: "jjay-9925d",
  storageBucket: "jjay-9925d.appspot.com",
  messagingSenderId: "746285537745",
  appId: "1:746285537745:web:532363cfe220e6105de8f0",
  measurementId: "G-8K78KMX4WD"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()    
export { auth, firestore, storage };
