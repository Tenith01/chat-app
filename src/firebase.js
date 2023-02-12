import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC7CVuA1nQwPyR6qhzrQJYYNhhGIufifu4",
    authDomain: "chat-6de9d.firebaseapp.com",
    projectId: "chat-6de9d",
    storageBucket: "chat-6de9d.appspot.com",
    messagingSenderId: "119850705410",
    appId: "1:119850705410:web:1d52fb2a80e69be753bd1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();