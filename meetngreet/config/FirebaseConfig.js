// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { CACHE_SIZE_UNLIMITED, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fir-projects-b9ae4.firebaseapp.com",
  databaseURL: "https://fir-projects-b9ae4-default-rtdb.firebaseio.com",
  projectId: "fir-projects-b9ae4",
  storageBucket: "fir-projects-b9ae4.appspot.com",
  messagingSenderId: "4921367682",
  appId: "1:4921367682:web:b11c744f4c402df209289b",
  measurementId: "G-GCC0QLJLEW"
};

const app = initializeApp(firebaseConfig);

// Enable offline persistence
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ sizeBytes: CACHE_SIZE_UNLIMITED }),
  persistence: persistentMultipleTabManager()
});

export { app, db };
