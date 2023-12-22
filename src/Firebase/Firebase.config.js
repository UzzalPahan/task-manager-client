// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVSIM4N7ZQQRuC44FmpmHS385cTT7EwPw",
  authDomain: "task-manager-cd3c2.firebaseapp.com",
  projectId: "task-manager-cd3c2",
  storageBucket: "task-manager-cd3c2.appspot.com",
  messagingSenderId: "416096924914",
  appId: "1:416096924914:web:e63402865a5e10d17fcc6b"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);