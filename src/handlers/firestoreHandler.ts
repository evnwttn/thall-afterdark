import { Request, Response } from "express";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

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
const timeLog = doc(firestore, `timelogCollection/timelog`);

export async function firestoreHandler(req: Request, res: Response) {
  try {
    await updateDoc(timeLog, req.body);
    res.status(200).send(JSON.stringify(req.body));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
