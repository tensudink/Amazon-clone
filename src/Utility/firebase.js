 import { initializeApp } from "firebase/app";
// auth
 import {getAuth} from 'firebase/auth'
 import "firebase/compat/firestore"
 import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNMWhxJZV-HIyKi-L3dvDTdcWpDfBxxHo",
  authDomain: "clone-50cd3.firebaseapp.com",
  projectId: "clone-50cd3",
  storageBucket: "clone-50cd3.firebasestorage.app",
  messagingSenderId: "957680319383",
  appId: "1:957680319383:web:eacb99e929ccfb9d4c62d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db = app.firestore()