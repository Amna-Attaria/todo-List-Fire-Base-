import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot,Timestamp ,deleteDoc,doc,query,orderBy} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyArPZitj3Jxi5-E3ZL79opPnyNYIupF0bM",
  authDomain: "to-do-list-data-fc46a.firebaseapp.com",
  projectId: "to-do-list-data-fc46a",
  storageBucket: "to-do-list-data-fc46a.firebasestorage.app",
  messagingSenderId: "146168138649",
  appId: "1:146168138649:web:ad3a25fc159e879489a108",
  measurementId: "G-X2K1EVPFDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc , onSnapshot,Timestamp,deleteDoc,doc,query,orderBy};
