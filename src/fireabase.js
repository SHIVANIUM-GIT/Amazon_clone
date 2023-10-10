import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADm7LdhNlUflbJWpAvG_ICAdFrxS0avKE",
  authDomain: "clone-bc4f6.firebaseapp.com",
  projectId: "clone-bc4f6",
  storageBucket: "clone-bc4f6.appspot.com",
  messagingSenderId: "897338230572",
  appId: "1:897338230572:web:823af54fbced9cad180e89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
