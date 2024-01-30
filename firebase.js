// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsmtT6BFIy3o740gyDOkEINnYgF8rL9e8",
  authDomain: "nevo-housing.firebaseapp.com",
  projectId: "nevo-housing",
  storageBucket: "nevo-housing.appspot.com",
  messagingSenderId: "703124989480",
  appId: "1:703124989480:web:c4f29110e25cdead90b71d",
  measurementId: "G-SKVSVVYW2E",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
