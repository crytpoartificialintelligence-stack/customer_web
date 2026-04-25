import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD8IevvYwWjzPPCoqEhhwTNhnVCTO7lhko",
  authDomain: "automating-with-ai.firebaseapp.com",
  projectId: "automating-with-ai",
  storageBucket: "automating-with-ai.firebasestorage.app",
  messagingSenderId: "512119035736",
  appId: "1:512119035736:web:ae25be53f84cb416eaf72d",
  measurementId: "G-NJYCRHVZ5C"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics safely (it only works in the browser)
export const analytics = typeof window !== "undefined" ? isSupported().then(yes => yes ? getAnalytics(app) : null) : null;

export default app;
