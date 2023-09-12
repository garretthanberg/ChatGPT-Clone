import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKm_DXO7d-waPNcJuGa3kqHFuy7Bwgz9w",
  authDomain: "chatgpt-clone-gh.firebaseapp.com",
  projectId: "chatgpt-clone-gh",
  storageBucket: "chatgpt-clone-gh.appspot.com",
  messagingSenderId: "784255864800",
  appId: "1:784255864800:web:096c99da65f40056a26585",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
