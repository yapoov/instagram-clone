import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA0hBzPaefQgf16KwKdkQ5kqtnbSFR0_zc",
  authDomain: "instaclone-c5f56.firebaseapp.com",
  projectId: "instaclone-c5f56",
  storageBucket: "instaclone-c5f56.appspot.com",
  messagingSenderId: "878726616223",
  appId: "1:878726616223:web:6f8fa40e1c8fd12e4d3eaa",
  measurementId: "G-EPCLGNS64H",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
