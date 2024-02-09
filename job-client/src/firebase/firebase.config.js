// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4_LfywtyVKostD18O-5R9R6ZNiEFHa7k",
  authDomain: "mern-job-portal-fa0a1.firebaseapp.com",
  projectId: "mern-job-portal-fa0a1",
  storageBucket: "mern-job-portal-fa0a1.appspot.com",
  messagingSenderId: "655685070152",
  appId: "1:655685070152:web:9050019583239ead32177d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app