import { initializeApp } from "firebase/app";

import { getAuth , FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDmWW5OysfVt-N7eCVaoPWmHx3Fyp3sM2Q",
  authDomain: "trena-33c1b.firebaseapp.com",
  projectId: "trena-33c1b",
  storageBucket: "trena-33c1b.appspot.com",
  messagingSenderId: "373129665217",
  appId: "1:373129665217:web:6e0cf6b79516e8a0c05240"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new FacebookAuthProvider()