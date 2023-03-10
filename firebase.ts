//yarn add firebase
//go to firebase then to </> project settings
import {getApp,getApps,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwpFh6cC8hgb4k52GjmIan__chKPGVXwU",
  authDomain: "chatgpt-messenger-app-4af28.firebaseapp.com",
  projectId: "chatgpt-messenger-app-4af28",
  storageBucket: "chatgpt-messenger-app-4af28.appspot.com",
  messagingSenderId: "66161212025",
  appId: "1:66161212025:web:b4c2e9dc9690a590efb2a8"
};
//if it is initialize then use the getApp or if not then iNITIALIZE THE NEW APP.
//It means we only want a single instance
const app=getApps().length ? getApp():initializeApp(firebaseConfig);
// Initialize Firebaseconst app = initializeApp(firebaseConfig);
//lets get our database 
const db=getFirestore(app);
//then we will be exporting the datbase objectr
export {db};
//the above is the end of firebase config
