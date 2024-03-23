import { app } from "./firebase.js";
import { user, isSignedIn, authLoaded } from "./auth.js";
import { getDatabase, ref, get, set, remove as rem } from "firebase/database";
import { watch } from 'vue';

const db = getDatabase(app);

const leaderboard = 'http://dreamlo.com/lb/70S2AACvbku8mKgXA8wJEQVHxq7h_jJkqr2G_Wjurhaw';

export const registeredObservables = [];

function serializeForFirebase(obj) {
  if (obj instanceof Set) {
    return Array.from(obj);
  } else {
    return obj;
  }
}

/**
 * Read data from a path in the database
 * @param {String} path the path to read from
 * @returns {Promise<Object>} the data at the path
 */
export const read = async (path) => {
  const snap = await get(ref(db, path));
  return snap.val();
}

/**
 * Write data to a path in the database
 * @param {String} path the path to write to
 * @param {Object} data the data to write
 * @returns {Promise<Object>} the result of the write operation
 */
export const write = async (path, data) => {
  set(ref(db, path), data);
}

export const remove = async (path) => {
  if (!isSignedIn.value || !authLoaded.value) {
    return;
  }
  return await rem(ref(db, path), null);
}

/**
 * Register a reactive object to be written to the database when it changes
 * @param {import('vue').Ref} observable the object to watch
 * @param {String} path the path to write to
 */
export const register = async (observable, path) => {
  watch(observable, val => {
    if (isSignedIn.value && authLoaded.value) {
      write(`users/${user.value.uid}/game-data/tileswap-naenae/${path}/`, serializeForFirebase(val));
    }
  }, { deep: true });
  registeredObservables.push({ observable, path });
}