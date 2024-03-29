// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8gog_UfFiU7Cap7qiptKLVBI89X_hM6I",
  authDomain: "project-rediux.firebaseapp.com",
  projectId: "project-rediux",
  storageBucket: "project-rediux.appspot.com",
  messagingSenderId: "365234318784",
  appId: "1:365234318784:web:92cb0aedfddc9e449a2c25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service

export default db;