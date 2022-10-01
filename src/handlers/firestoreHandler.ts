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

const now = Date.now();
let date_ob = new Date(now);

export async function firestoreHandler(req: Request, res: Response) {
  const logData = {
    year: date_ob.getFullYear(),
    month: date_ob.getMonth() + 1,
    day: date_ob.getDate(),
    hour: date_ob.getHours(),
    minute: date_ob.getMinutes(),
    second: date_ob.getSeconds(),
  };

  try {
    await updateDoc(timeLog, logData);
    res.status(200).send(JSON.stringify(logData));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
