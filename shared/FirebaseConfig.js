import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDtuoU-Pb8sm43NbPiM6kk1tqwxOK76kVY",
  authDomain: "authentication-428205.firebaseapp.com",
  projectId: "authentication-428205",
  storageBucket: "authentication-428205.appspot.com",
  messagingSenderId: "495505076113",
  appId: "1:495505076113:web:3282e39bf62da7776fb430",
  measurementId: "G-5JMCM3S87B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Analytics (only on client-side)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { auth, db, analytics };