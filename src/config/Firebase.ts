import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  databaseURL: "https://project-id.firebaseio.com",
  measurementId: "G-measurement-id",

  apiKey: "AIzaSyBAGZEoYvO4uwUfCmSds4DXoUibP3S5do8",
  authDomain: "smart-e-commerce-d6862.firebaseapp.com",
  projectId: "smart-e-commerce-d6862",
  storageBucket: "smart-e-commerce-d6862.firebasestorage.app",
  messagingSenderId: "491626622559",
  appId: "1:491626622559:web:b6954f868ca9f88b7e75ea",
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const auth = getAuth(app);
const db = getFirestore(app)
export { auth, db };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
