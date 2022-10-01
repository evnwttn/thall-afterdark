import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD_LB7UtRh32wQ6mPZv6Wnp8q7EK-HIDYg",
  authDomain: "thall-30b94.firebaseapp.com",
  projectId: "thall-30b94",
  storageBucket: "thall-30b94.appspot.com",
  messagingSenderId: "549197004508",
  appId: "1:549197004508:web:e14d810d640d9225e67e19",
  measurementId: "G-ELKEZCLQVZ",
});

const firestore = getFirestore();
