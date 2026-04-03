import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC3sd2HsU6Q46IXjjkLxrOBULmjxXVfuVE",
  authDomain: "globaldirectory-18e84.firebaseapp.com",
  projectId: "globaldirectory-18e84",
  storageBucket: "globaldirectory-18e84.firebasestorage.app",
  messagingSenderId: "776505635458",
  appId: "1:776505635458:web:8782f02626c507940dfa9b",
  measurementId: "G-25YRDWG4DH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
