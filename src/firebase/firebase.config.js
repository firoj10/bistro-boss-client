// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId

//   apiKey: "AIzaSyAPc9cWW_Br51HdheEtnALNi2wbJKpvHVg",
//   authDomain: "bistro-boss-559bb.firebaseapp.com",
//   projectId: "bistro-boss-559bb",
//   storageBucket: "bistro-boss-559bb.appspot.com",
//   messagingSenderId: "51977237551",
//   appId: "1:51977237551:web:31e083b3d97ee08e5c02da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

