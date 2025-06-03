// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI0c7gnBbRQ1ujFhhNXOkmsXVhlvsb0og",
  authDomain: "briw-5f308.firebaseapp.com",
  projectId: "briw-5f308",
  storageBucket: "briw-5f308.firebasestorage.app",
  messagingSenderId: "666286817298",
  appId: "1:666286817298:web:e6db8f95424129cef518cb",
  measurementId: "G-KTD7BQ8QEW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app)
export const db = getFirestore(app)