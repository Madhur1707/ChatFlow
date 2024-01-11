// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCg4LAli-L_qtJv8Y2rr3hk5hrXzql9B7c",
  authDomain: "chatflow-fe46f.firebaseapp.com",
  projectId: "chatflow-fe46f",
  storageBucket: "chatflow-fe46f.appspot.com",
  messagingSenderId: "1047422468925",
  appId: "1:1047422468925:web:43c1bcdd1af2bd46c3fb54",
  measurementId: "G-F74CTBK02R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()