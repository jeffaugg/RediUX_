import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC8gog_UfFiU7Cap7qiptKLVBI89X_hM6I",
  authDomain: "project-rediux.firebaseapp.com",
  projectId: "project-rediux",
  storageBucket: "project-rediux.appspot.com",
  messagingSenderId: "365234318784",
  appId: "1:365234318784:web:92cb0aedfddc9e449a2c25"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const imageDb = getStorage(app);