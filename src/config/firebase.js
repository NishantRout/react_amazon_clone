import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJo_Kvd6ckltB8XS1aAMPDUjciGJcs6kc",
    authDomain: "react--clone-642f1.firebaseapp.com",
    databaseURL: "https://react--clone-642f1.firebaseio.com",
    projectId: "react--clone-642f1",
    storageBucket: "react--clone-642f1.appspot.com",
    messagingSenderId: "304243786326",
    appId: "1:304243786326:web:508ec434aac6e7d292f1f7",
    measurementId: "G-27NS3G6NLJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };