// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",
  authDomain: "artridge-website.firebaseapp.com",
  databaseURL: "https://artridge-website.firebaseio.com",
  projectId: "artridge-website",
  storageBucket: "artridge-website.appspot.com",
  messagingSenderId: "554359864126",
  appId: "1:554359864126:web:56901925bba81278fb0a6f",
  measurementId: "G-0KJBNGLJL4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);