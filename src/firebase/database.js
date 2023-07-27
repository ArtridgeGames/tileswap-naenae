import { app } from "./firebase.js";
import { getDatabase, ref, get, set } from "firebase/database";

const db = getDatabase(app);

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
  return await set(ref(db, path), data);
}