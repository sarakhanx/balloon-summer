
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDuYCRKJfsRUK_DFdNgjZJ61ZqRocZrZrU",
  authDomain: "balloon-summer.firebaseapp.com",
  projectId: "balloon-summer",
  storageBucket: "balloon-summer.appspot.com",
  messagingSenderId: "283753691528",
  appId: "1:283753691528:web:2151ab24b3fcd0e791a23d",
  measurementId: "G-1KXP68Z89E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;