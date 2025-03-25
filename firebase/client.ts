// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA25HSNvQhaZYNgkuTUADDE9oecIyz3bIo",
  authDomain: "interactive-ai-interview.firebaseapp.com",
  projectId: "interactive-ai-interview",
  storageBucket: "interactive-ai-interview.firebasestorage.app",
  messagingSenderId: "113665045655",
  appId: "1:113665045655:web:b7661bc7df9c8e5701a5d2",
  measurementId: "G-3D41N2RZ0S"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);