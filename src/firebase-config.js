import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgK4QXLXy-n6zQ3sGT4DXziNcdnHKVjmM",
  authDomain: "react-crud-48758.firebaseapp.com",
  projectId: "react-crud-48758",
  storageBucket: "react-crud-48758.appspot.com",
  messagingSenderId: "778417357175",
  appId: "1:778417357175:web:28fa39497e5fb1d5f0e172",
  measurementId: "G-72M4NFR5WN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);