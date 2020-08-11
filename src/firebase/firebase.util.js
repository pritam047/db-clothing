import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDucg5cKS161P7QZIda91x4czNExAqlfXY",
    authDomain: "db-clothing-be39b.firebaseapp.com",
    databaseURL: "https://db-clothing-be39b.firebaseio.com",
    projectId: "db-clothing-be39b",
    storageBucket: "db-clothing-be39b.appspot.com",
    messagingSenderId: "83435478879",
    appId: "1:83435478879:web:fd38585897bd79bfd460ea",
    measurementId: "G-B13MM7KW0X"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
