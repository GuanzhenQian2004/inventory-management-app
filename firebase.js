// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsthayw9acKdtgYJj-5jUPLKKg2mG5e2k",
    authDomain: "javascript-project-269da.firebaseapp.com",
    projectId: "javascript-project-269da",
    storageBucket: "javascript-project-269da.appspot.com",
    messagingSenderId: "562675376745",
    appId: "1:562675376745:web:d4c2d83c34ca5513d9b8f8",
    measurementId: "G-FCSDDV6JDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const auth = getAuth(app);

export{app, firestore, auth}