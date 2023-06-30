// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWkYka9IzXOCvhwi_rb07Y-FMqt1VpFK8",
  authDomain: "instagram-clone-b2d2c.firebaseapp.com",
  projectId: "instagram-clone-b2d2c",
  storageBucket: "instagram-clone-b2d2c.appspot.com",
  messagingSenderId: "615401449409",
  appId: "1:615401449409:web:050de58fb9867377deb140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();