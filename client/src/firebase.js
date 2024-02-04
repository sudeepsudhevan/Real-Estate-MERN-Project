// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-a1bfa.firebaseapp.com",
    projectId: "mern-estate-a1bfa",
    storageBucket: "mern-estate-a1bfa.appspot.com",
    messagingSenderId: "1093815629931",
    appId: "1:1093815629931:web:b3ffa68ba9e3a1e66e592e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);