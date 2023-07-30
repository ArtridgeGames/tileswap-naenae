import { app } from "./firebase.js";
import { user, isSignedIn } from "./auth.js";
import { getDatabase, ref, get, set } from "firebase/database";
import { watch } from 'vue';

const db = getDatabase(app);

export const registeredObservables = [];
const registeredWriteOperations = [];

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
  registeredWriteOperations.push({ path, data });
}

setInterval(async () => {
  const batch = [];
  for (const { path, data } of registeredWriteOperations) {
    batch.push(set(ref(db, path), data));
  }
  await Promise.all(batch);
  registeredWriteOperations.length = 0;
}, 10e3);

/**
 * Register a reactive object to be written to the database when it changes
 * @param {import('vue').Ref} observable the object to watch
 * @param {String} path the path to write to
 */
export const register = async (observable, path) => {
  watch(observable, val => {
    if (isSignedIn.value) {
      write(`users/${user.value.uid}/game-data/tileswap-naenae/${path}/`, serializeForFirebase(val));
    }
  }, { deep: true });
  registeredObservables.push({ observable, path });
}