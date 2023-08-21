// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpLcrF5jfG5qSPwk_2HGM2AIv8sPa_bWQ",
  authDomain: "zoren-f90ff.firebaseapp.com",
  projectId: "zoren-f90ff",
  storageBucket: "zoren-f90ff.appspot.com",
  messagingSenderId: "16340574900",
  appId: "1:16340574900:web:d826784934229d21842de1",
  measurementId: "G-LFKEM4X1W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
//const analytics = getAnalytics(app);