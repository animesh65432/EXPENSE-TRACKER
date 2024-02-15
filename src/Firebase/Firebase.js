// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeTJueOOOp9VIvedFWi7ZLOG_exHKBjq4",
  authDomain: "sgarpner-project.firebaseapp.com",
  projectId: "sgarpner-project",
  storageBucket: "sgarpner-project.appspot.com",
  messagingSenderId: "73022062284",
  appId: "1:73022062284:web:f3c2cd6afdf27e452d0c69",
  measurementId: "G-T3V2YW6MS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth();
