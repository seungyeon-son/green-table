import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "FIREBASE_APP_API_KEY",
  authDomain: "FIREBASE_APP_AUTH_DOMAIN",
  projectId: "FIREBASE_APP_PROJECT_ID",
  storageBucket: "FIREBASE_APP_STORAGE_BUCKET",
  messagingSenderId: "FIREBASE_APP_MESSAGING_SENDER_ID",
  appId: "FIREBASE_APP_APP_ID",
  measurementId: "FIREBASE_APP_DATABASE_URL",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth, firebaseApp };
