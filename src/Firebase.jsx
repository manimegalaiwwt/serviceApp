// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFwH2FLrJFJPTtnPnQON8jJGTD0Rn0ICY",
  authDomain: "plm-service-dd3a9.firebaseapp.com",
  projectId: "plm-service-dd3a9",
  storageBucket: "plm-service-dd3a9.appspot.app",
  databaseURL: "https://plm-service-dd3a9-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "883448616420",
  appId: "1:883448616420:web:a011db8b691f66aaa963f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)