import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyADwd9pfela6YA5aS2E6_fiD58R4tlZ4Vc",
    authDomain: "chefit-dev.firebaseapp.com",
    projectId: "chefit-dev",
    storageBucket: "chefit-dev.appspot.com",
    messagingSenderId: "948108727190",
    appId: "1:948108727190:web:789912e335c5db1e4943b7",
    measurementId: "G-RDZY4BJX0P"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();