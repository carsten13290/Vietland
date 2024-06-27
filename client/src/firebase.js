// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-gap-blog.firebaseapp.com",
  projectId: "mern-gap-blog",
  storageBucket: "mern-gap-blog.appspot.com",
  messagingSenderId: "205938469921",
  appId: "1:205938469921:web:d82274a0e0995c3d4c0760"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);


