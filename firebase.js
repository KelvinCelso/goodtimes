
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBcaezJSVK20fLSMBCHYTb4RFjsFCj7hqM",
  authDomain: "goodtimes-a8418.firebaseapp.com",
  projectId: "goodtimes-a8418",
  storageBucket: "goodtimes-a8418.appspot.com",
  messagingSenderId: "1026460618208",
  appId: "1:1026460618208:web:302435a86bfc5aefd7ef85",
  measurementId: "G-HP8738P732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);