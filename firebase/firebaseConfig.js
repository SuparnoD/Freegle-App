// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiJj8Z7oOC6gUVT7Oz0v9oiWEEWoADsB8",
  authDomain: "freegle-server.firebaseapp.com",
  projectId: "freegle-server",
  storageBucket: "freegle-server.appspot.com",
  messagingSenderId: "839434641369",
  appId: "1:839434641369:web:fd3e6c56d924135ae543c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);