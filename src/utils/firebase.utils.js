// Import from firebase app, auth and firestore
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

// Get database settings
const firebaseConfig = {
  apiKey: "AIzaSyDP2xS6RTY862VhgwkxKe6GEdvB63e-7R8",
  authDomain: "ava-clarke.firebaseapp.com",
  projectId: "ava-clarke",
  storageBucket: "ava-clarke.appspot.com",
  messagingSenderId: "100297178523",
  appId: "1:100297178523:web:d6f681c009a71bbc13b53e",
  measurementId: "G-BBDKEESMV7",
};

// Initialize app
initializeApp(firebaseConfig);

// Get authorization and provider details
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore();

// Pass in user details to be imported into firebase
export const importUserToFirebase = async (
  displayName,
  email,
  createdAt,
  uid,
  telephone
) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.data()) {
      await setDoc(doc(db, "users", uid), {
        displayName,
        email,
        createdAt,
        telephone: telephone ? telephone : "",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

// Pass in authorization details to use google sign in with popup method
export const googleSignIn = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const createdAt = new Date();
      const { displayName, email, uid } = result.user;
      importUserToFirebase(displayName, email, createdAt, uid);
    })
    .catch((error) => {
      console.log(error);
    });

export const defaultSignIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    alert(error);
  });

// Pass in authorization details to use default sign up method
export const defaultSignUp = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  telephone,
  privacyStatement
) => {
  if (password !== confirmPassword) {
    alert("Passwords Don't Match!");
    return;
  }

  if (!privacyStatement) {
    alert("You must agree to the privacy statement");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const displayName = firstName + " " + lastName;
      const createdAt = new Date();
      const { email, uid } = result.user;
      importUserToFirebase(displayName, email, createdAt, uid, telephone);
    })
    .catch((error) => {
      alert(error.message);
    });
};
