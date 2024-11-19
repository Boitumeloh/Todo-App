// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2-5HQBaHd6z_MFgxBy8SIRd9jFlnP-Lo",
  authDomain: "todoapp-23399.firebaseapp.com",
  projectId: "todoapp-23399",
  storageBucket: "todoapp-23399.appspot.com",
  messagingSenderId: "631023003118",
  appId: "1:631023003118:web:7b7442ca3c49cfa703daff",
  measurementId: "G-Z5Z6WP2W6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };