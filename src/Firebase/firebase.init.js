// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxsepvxzeVrUlwSiMJV34SxiB2zTG9F6g",
  authDomain: "smart-deals-38ab5.firebaseapp.com",
  projectId: "smart-deals-38ab5",
  storageBucket: "smart-deals-38ab5.firebasestorage.app",
  messagingSenderId: "973273281640",
  appId: "1:973273281640:web:18c0dc774113de089f37dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
  