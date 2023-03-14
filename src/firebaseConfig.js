// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDaPJ4VZewdUiU7HX8tfiHguIGp5k3NIWo",
	authDomain: "reacthomemakers.firebaseapp.com",
	projectId: "reacthomemakers",
	storageBucket: "reacthomemakers.appspot.com",
	messagingSenderId: "792763123486",
	appId: "1:792763123486:web:e83ac67c8cc39cc0a66b0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
