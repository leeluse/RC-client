// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt_TBRaW7Ou0jdYvaIm0D5WkZiD3-eQ-Q",
  authDomain: "rental-change.firebaseapp.com",
  projectId: "rental-change",
  storageBucket: "rental-change.appspot.com",
  messagingSenderId: "1058242263745",
  appId: "1:1058242263745:web:d6924d74d97342fd3d3240",
  measurementId: "G-0D4YQQ5F3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);