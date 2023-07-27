import { ref } from 'firebase/database';
import { app } from "./firebase.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { reactive } from 'vue';

const auth = getAuth(app);

let currentUser = reactive({});

onAuthStateChanged(auth, (user) => {
  currentUser = user;
});

export const getCurrentUser = () => {
  return currentUser;
}

export const isSignedIn = () => {
  return Object.keys(currentUser).length > 0;
}

export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
}