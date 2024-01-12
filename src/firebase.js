// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD1aKGccSs9wZcJdulkMRX58UandXph5Sk",
  authDomain: "chatfloww-d6e01.firebaseapp.com",
  projectId: "chatfloww-d6e01",
  storageBucket: "chatfloww-d6e01.appspot.com",
  messagingSenderId: "554823743388",
  appId: "1:554823743388:web:d7195cf5c9862b1facba59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();