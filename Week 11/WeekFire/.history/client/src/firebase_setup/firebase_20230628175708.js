// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2xhc_aA8mWuYU34zqEO5AyRztSZpKPZ4",
  authDomain: "my-project-1531702898498.firebaseapp.com",
  databaseURL: "https://my-project-1531702898498-default-rtdb.firebaseio.com",
  projectId: "my-project-1531702898498",
  storageBucket: "my-project-1531702898498.appspot.com",
  messagingSenderId: "38039037147",
  appId: "1:38039037147:web:47d089daa5c016f81298fe",
  measurementId: "G-SBPW7H55B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
//const analytics = getAnalytics(app);