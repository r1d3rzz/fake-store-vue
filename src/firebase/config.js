import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCmylxEvuz6c-dFfXaNZYearJfCEgCLPI",
  authDomain: "vue-store-9528f.firebaseapp.com",
  projectId: "vue-store-9528f",
  storageBucket: "vue-store-9528f.appspot.com",
  messagingSenderId: "405073042897",
  appId: "1:405073042897:web:9371483fdd1de8cd89d4f0",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
