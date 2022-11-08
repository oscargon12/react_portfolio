import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyCu4RMQBEn3kjIF2ROtGF3GdpzdgVYtK80",
    authDomain: "portfolio-crud-81b28.firebaseapp.com",
    projectId: "portfolio-crud-81b28",
    storageBucket: "portfolio-crud-81b28.appspot.com",
    messagingSenderId: "262389465160",
    appId: "1:262389465160:web:aa91d75f8a21d1c2bad87d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)