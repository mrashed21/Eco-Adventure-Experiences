// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASjy00N90HTq8YSS6zkNYnAJHnYLeTWHI",
  authDomain: "eco-adventure-experience-1e120.firebaseapp.com",
  projectId: "eco-adventure-experience-1e120",
  storageBucket: "eco-adventure-experience-1e120.firebasestorage.app",
  messagingSenderId: "1018667975587",
  appId: "1:1018667975587:web:ac9cd9d5d9fd859d185016",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
