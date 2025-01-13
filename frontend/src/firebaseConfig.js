import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiqKMAG2llcG3jWUfhM_4Dm_rfJTDd8u0",
  authDomain: "vector-montcorp.firebaseapp.com",
  projectId: "vector-montcorp",
  storageBucket: "vector-montcorp.appspot.com",
  messagingSenderId: "250317230991",
  appId: "1:250317230991:web:ec1d8ea1e9715c46eaf1fa",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
