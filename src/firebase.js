// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  // apiKey: "AIzaSyAuUDfxVTVb5Bl-thQRSSJtFw2O0l7zAS4",
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "todo-app-ce17f.firebaseapp.com",
  projectId: "todo-app-ce17f",
  storageBucket: "todo-app-ce17f.appspot.com",
  messagingSenderId: "382929657011",
  appId: "1:382929657011:web:d0afa16b05adf7ea5d64c6",
};
// console.log(import.meta.env.VITE_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
