import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAeWEe2hqGBg-W7k1gB770S-pIf3Yylam8",
  authDomain: "networked-app.firebaseapp.com",
  projectId: "networked-app",
  storageBucket: "networked-app.appspot.com",
  messagingSenderId: "712698441345",
  appId: "1:712698441345:web:d1c08e659a2e51df0b6780",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
