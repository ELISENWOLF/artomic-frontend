import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCTczr-hyEdHDti1JGpsaKZKHtTYbIXBPU",
    authDomain: "artomic-1d678.firebaseapp.com",
    projectId: "artomic-1d678",
    storageBucket: "artomic-1d678.appspot.com",
    messagingSenderId: "1052779524976",
    appId: "1:1052779524976:web:1eeb8eee398757bc4855b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)



export default app