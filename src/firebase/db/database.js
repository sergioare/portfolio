import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const { API_KEY , AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID}= import.meta.env

const firebaseConfig = {
  apiKey: "AIzaSyANay8WEmAsfLPCJw7vOWxjnGPvSvltwdo",
  authDomain: "sergio-arevalo.firebaseapp.com",
  databaseURL: "https://sergio-arevalo-default-rtdb.firebaseio.com",
  projectId: "sergio-arevalo",
  storageBucket: "sergio-arevalo.appspot.com",
  messagingSenderId: "236746909689",
  appId: "1:236746909689:web:94ddda268273a8e903ff28",
  measurementId: "G-68MRNW6HV7"
};
    // apiKey: API_KEY ,
    // authDomain: AUTH_DOMAIN,
    // databaseURL: DATABASE_URL,
    // projectId: PROJECT_ID,
    // storageBucket: STORAGE_BUCKET,
    // messagingSenderId: MESSAGING_SENDER_ID,
    // appId: APP_ID,
    // measurementId: MEASUREMENT_ID
  

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);