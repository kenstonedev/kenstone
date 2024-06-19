// firebase.js

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbhaElvMCLWlWBZ8kg6HVgGF0-p19qqdg",
  authDomain: "kenstone-27096.firebaseapp.com",
  projectId: "kenstone-27096",
  storageBucket: "kenstone-27096.appspot.com",
  messagingSenderId: "234824263163",
  appId: "1:234824263163:web:fe8b8581d61e519305575e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, sendPasswordResetEmail };
