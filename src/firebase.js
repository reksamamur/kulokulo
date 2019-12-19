import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPz4T5p5ejzigkQkn8A3pXrHzGbKEVDgw",
    authDomain: "kuloc-87753.firebaseapp.com",
    databaseURL: "https://kuloc-87753.firebaseio.com",
    projectId: "kuloc-87753",
    storageBucket: "kuloc-87753.appspot.com",
    messagingSenderId: "534168401231",
    appId: "1:534168401231:web:89bb9de605ce1ba855c13a",
    measurementId: "G-7KNYTLLJKV"
});

const db = firebaseApp.firestore();

export { db };