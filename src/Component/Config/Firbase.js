// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeLjwemrn9WPS1p-fJfxyXyPWVpEWJ6Z0",
  authDomain: "react-d52d5.firebaseapp.com",
  projectId: "react-d52d5",
  storageBucket: "react-d52d5.firebasestorage.app",
  messagingSenderId: "366978697304",
  appId: "1:366978697304:web:44e788c221970308d9222d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);