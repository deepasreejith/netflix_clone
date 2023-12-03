// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET  ,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_CENTER ,
  appId:process.env.REACT_APP_FIREBASE_API_ID ,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID 
};*/
const firebaseConfig = {
  apiKey: "AIzaSyD1bvwBuZWO7JkBSgA5JSwJN_RAAvc-t5A",
  authDomain: "netflix-final-a8363.firebaseapp.com",
  projectId: "netflix-final-a8363",
  storageBucket: "netflix-final-a8363.appspot.com",
  messagingSenderId: "283662594767",
  appId: "1:283662594767:web:80740e27df0c4f05983dba",
  measurementId: "G-CWPW9TPLNY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)