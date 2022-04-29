import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCaX1uM5lAytgWyTuhdFB6aAUiEG6AUmtg",
  authDomain: "assignment11-dress-shop.firebaseapp.com",
  projectId: "assignment11-dress-shop",
  storageBucket: "assignment11-dress-shop.appspot.com",
  messagingSenderId: "418683110103",
  appId: "1:418683110103:web:dd8d25adf7db9d6ddfa692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
