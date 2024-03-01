import { app } from "./firebase.js";
import { read, registeredObservables } from "./database.js"
import { getAuth,
         onAuthStateChanged,
         signInWithEmailAndPassword,
         indexedDBLocalPersistence,
         initializeAuth } from "firebase/auth";
import { ref, computed } from 'vue';
import { Capacitor } from '@capacitor/core';

const getFirebaseAuth = () => {
  if (Capacitor.isNativePlatform()) {
    return initializeAuth(app, {
      persistence: indexedDBLocalPersistence,
    });
  } else {
    return getAuth();
  }
};

const auth = getFirebaseAuth(app);

const currentUser = ref({});
const currentUserData = ref({});

export const authLoaded = new ref(false);

auth.authStateReady().then(() => {
  authLoaded.value = true;
});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser.value = user;
    currentUserData.value = await read(`users/${user.uid}`);
    
    for (const { observable, path } of registeredObservables) {
      if (currentUserData.value['game-data'] 
       && currentUserData.value['game-data']['tileswap-naenae']
       && currentUserData.value['game-data']['tileswap-naenae'][path]) {
        const data = currentUserData.value['game-data']['tileswap-naenae'][path];
        if (typeof data === 'object' && !Array.isArray(data)) {
          observable.value = { ...observable.value, ...data };
        } else {
          observable.value = currentUserData.value['game-data']['tileswap-naenae'][path];
        }

      }
    }

  } else {
    currentUser.value = {};
    currentUserData.value = {};
  }
});

/**
 * Returns the current user or an empty object if no user is signed in.
 * @returns {import('firebase/auth').User} user
 */
export const user = computed(() => currentUser.value);

/**
 * Returns the current user data from the database or an empty object if no user is signed in.
 * @returns {JSON} the user data
 */
export const userData = computed(() => currentUserData.value);

/**
 * Returns true if a user is signed in.
 * @returns {boolean} true if a user is signed in
 */
export const isSignedIn = computed(() => {
  return Object.keys(currentUser.value).length > 0;
});

/**
 * Signs in a user with the given email and password.
 * @param {String} email 
 * @param {String} password 
 * @returns {Promise<import('firebase/auth').UserCredential>}
 */
export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
}

/**
 * Signs out the current user.
 * @returns {Promise<void>}
 */
export const signOut = async () => {
  return await auth.signOut();
}