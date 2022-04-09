// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbLWrPrmufKD_8l7BhlBe55toz-nF3A88",
  authDomain: "ema-john-simple-de163.firebaseapp.com",
  projectId: "ema-john-simple-de163",
  storageBucket: "ema-john-simple-de163.appspot.com",
  messagingSenderId: "77959610012",
  appId: "1:77959610012:web:e5ac93091bd9201e6cb759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;