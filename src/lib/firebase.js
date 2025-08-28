// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv2LjXRH0Rnhw2TzeTrNYiOdSG9ErQsDA",
  authDomain: "travel-agency-61e4f.firebaseapp.com",
  projectId: "travel-agency-61e4f",
  storageBucket: "travel-agency-61e4f.appspot.com",
  messagingSenderId: "198487281122",
  appId: "1:198487281122:web:74e0506de227891789bdbb",
  measurementId: "G-CRFKG3ELD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore reference
export const db = getFirestore(app);
