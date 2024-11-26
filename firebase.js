// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDu32VG8AMLiG_z4AiSctMXXKxPLqY4G44",
  authDomain: "atividademarcel.firebaseapp.com",
  projectId: "atividademarcel",
  storageBucket: "atividademarcel.firebasestorage.app",
  messagingSenderId: "211966850861",
  appId: "1:211966850861:web:2df8bc7ad1929e713145a4",
  measurementId: "G-V6G0VMY315"
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