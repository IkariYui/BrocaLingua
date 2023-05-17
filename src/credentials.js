// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_uuqxxGw4VsGt6qtZjcf1FeRgHbkpkvk",
  authDomain: "broca-lingua.firebaseapp.com",
  projectId: "broca-lingua",
  storageBucket: "broca-lingua.appspot.com",
  messagingSenderId: "967882963291",
  appId: "1:967882963291:web:3a367da5424dcdeda7027e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

