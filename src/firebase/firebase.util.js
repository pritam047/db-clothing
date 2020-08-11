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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
