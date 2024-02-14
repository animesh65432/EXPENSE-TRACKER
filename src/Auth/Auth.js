// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3_cYhD3OyDKCdB6LmnFkL3lyEwtFjaoM",
  authDomain: "expense-tracker-ff6cb.firebaseapp.com",
  projectId: "expense-tracker-ff6cb",
  storageBucket: "expense-tracker-ff6cb.appspot.com",
  messagingSenderId: "183088048019",
  appId: "1:183088048019:web:f5aa3d56942652c347aa66",
  measurementId: "G-QHME7TJJDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth();
