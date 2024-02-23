// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Required for side-effects
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWgC88sOXahDPI75vZ2C4f1IEhCjjMiOk",
  authDomain: "noteballs-f1e64.firebaseapp.com",
  projectId: "noteballs-f1e64",
  storageBucket: "noteballs-f1e64.appspot.com",
  messagingSenderId: "205875102621",
  appId: "1:205875102621:web:33ab5b5353007e58b36574"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app)

export {
  db,
  auth
}
