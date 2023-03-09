import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAvWEf3Kk_gly8tr_8jzmTZAOg4l-ixN0o",
  authDomain: "artomic-ecommerce.firebaseapp.com",
  projectId: "artomic-ecommerce",
  storageBucket: "artomic-ecommerce.appspot.com",
  messagingSenderId: "283430494883",
  appId: "1:283430494883:web:5798d2a5a6c02ba9355516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app