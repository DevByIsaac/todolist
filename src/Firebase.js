// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCcl_Qeyxsf-L8iK6nLP4N42ZCGqMApvZw",
  authDomain: "todolist-9481e.firebaseapp.com",
  projectId: "todolist-9481e",
  storageBucket: "todolist-9481e.appspot.com",
  messagingSenderId: "28097791028",
  appId: "1:28097791028:web:b6336f627fc29a63ce7661",
};

// Inicializa Firebase
const App = initializeApp(firebaseConfig);

// Obtén instancias de Auth y Firestore
export const auth = getAuth(App);
export const firestore = getFirestore(App);
