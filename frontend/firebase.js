
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vertexai-f5b27.firebaseapp.com",
  projectId: "vertexai-f5b27",
  storageBucket: "vertexai-f5b27.firebasestorage.app",
  messagingSenderId: "361924078950",
  appId: "1:361924078950:web:7f8f27922766907286aca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()