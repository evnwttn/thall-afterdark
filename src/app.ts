import express from "express";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { cors } from "./middleware";
import { postHandler } from "./handlers";

const app = express();
const port = 4000;
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

app.use(cors);

app.post("/", postHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
