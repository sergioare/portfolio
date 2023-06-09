import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
dotenv.config();
import {getFirestore} from "firebase/firestore"

const { API_KEY , AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID}= process.env

const firebaseConfig = {
    apiKey: API_KEY ,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };
to 
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);