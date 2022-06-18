import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC-N3nlUMlTdM1p5TRO5Qxt16KsLwViTl0',
  authDomain: 'calendar-89df3.firebaseapp.com',
  projectId: 'calendar-89df3',
  storageBucket: 'calendar-89df3.appspot.com',
  messagingSenderId: '123329014723',
  appId: '1:123329014723:web:3a23a9e5dd0d664507eb76',
  measurementId: 'G-EN1Q8016PT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app);
export const db = getFirestore();
