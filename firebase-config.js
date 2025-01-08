// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";  // for Firestore
import "firebase/auth";  // for Firebase Authentication (if needed)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUmuAbAXEwvbm2kQZR4vxxDPECEpFCgPU",
  authDomain: "niat-connect.firebaseapp.com",
  projectId: "niat-connect",
  storageBucket: "niat-connect.firebasestorage.app",
  messagingSenderId: "435858469604",
  appId: "1:435858469604:web:40b33a422f0e3b23a232f1",
  measurementId: "G-1Y87GQSW2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = app.firestore();  // Access Firestore
const auth = app.auth();  // Access Firebase Authentication (if using)

export { db, auth };  // Export to use in other parts of the app