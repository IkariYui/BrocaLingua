// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD467IvQ6wLmt1m30YGsEueuhwBKMMZfX8",
  authDomain: "proyectonuevof-6d2d8.firebaseapp.com",
  projectId: "proyectonuevof-6d2d8",
  storageBucket: "proyectonuevof-6d2d8.appspot.com",
  messagingSenderId: "761340937051",
  appId: "1:761340937051:web:d4c9e3f0489356de18507e",
  measurementId: "G-KRW4F604PV"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

