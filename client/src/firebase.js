// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nobrokerproject-afdaf.firebaseapp.com",
  projectId: "nobrokerproject-afdaf",
  storageBucket: "nobrokerproject-afdaf.appspot.com",
  messagingSenderId: "155856821041",
  appId: "1:155856821041:web:eb70be25eeb954ea93ee10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);