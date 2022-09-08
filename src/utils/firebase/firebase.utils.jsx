import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import{
 getFirestore,
 doc,
 getDoc,
 setDoc, 
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAO8bVgYzzq2rjIA9okVUe_GZskiH08Wqw",
    authDomain: "shop-db-1bc70.firebaseapp.com",
    projectId: "shop-db-1bc70",
    storageBucket: "shop-db-1bc70.appspot.com",
    messagingSenderId: "1016953080651",
    appId: "1:1016953080651:web:e63495d3693f039ce3f6ce"
  };
  
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async(userAuth)=> {
    const userDocRef = doc (db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc (userDocRef);
   

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt,
        });
      }catch(error){
          console.log('error creating by user', error.message);
        }
      }
      return userDocRef;
    };


 

