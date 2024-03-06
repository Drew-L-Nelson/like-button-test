import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const mySecret = process.env['firebaseConfigKey'];

const firebaseConfig = {
    mySecret,
    //apiKey: "AIzaSyDbO5Pw41j3XEP7awOpb7XQT4yDq8w3T8Y",
    authDomain: "like-button-test.firebaseapp.com",
    projectId: "like-button-test",
    storageBucket: "like-button-test.appspot.com",
    messagingSenderId: "968058607316",
    appId: "1:968058607316:web:a0badcd73c8fb7ad880d41",
    measurementId: "G-TVVC25KVQE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);