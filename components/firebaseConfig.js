// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmSBonvCpRZKSVrQR4JrJ7rS1jUXHNIRU",
  authDomain: "zenith-sih.firebaseapp.com",
  projectId: "zenith-sih",
  storageBucket: "zenith-sih.appspot.com",
  messagingSenderId: "222624081427",
  appId: "1:222624081427:web:ef48ad58f15a414b2501e6",
  measurementId: "G-WD1R7VK4PE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
