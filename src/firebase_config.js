import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB1_HPOxU6fraCpTdYhfuZZCYibTxLz1vE",
  authDomain: "arepas-adec5.firebaseapp.com",
  projectId: "arepas-adec5",
  storageBucket: "arepas-adec5.firebasestorage.app",
  messagingSenderId: "202264958277",
  appId: "1:202264958277:web:55bca7f3333cdee1b25a2c",
  measurementId: "G-88EMY7MG6E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
console.log('Firebase inicializado:', app.name, analytics ? 'Analytics activo' : 'Analytics no disponible');

export { app, analytics, auth, db };