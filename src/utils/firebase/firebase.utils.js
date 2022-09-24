import {initializeApp} from 'firebase/app'
import {signInWithRedirect,getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
import { Await } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyCkDVDXwCGM4v1terkQ6QQPnvaMYdbI8ek",
    authDomain: "ecommerce-73506.firebaseapp.com",
    projectId: "ecommerce-73506",
    storageBucket: "ecommerce-73506.appspot.com",
    messagingSenderId: "429847329767",
    appId: "1:429847329767:web:cc24ecadca5d2d25f5db42"
  };

  const firebaseApp =initializeApp(firebaseConfig)

  const provider =new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopUp= ()=> signInWithPopup(auth,provider)
  
  export const db = getFirestore()

 export const createUserDocFromAuth =async(userAuth,additionalInformation={})=>{
    if(!userAuth) return
    const userDocRef = doc(db,'users',userAuth.uid )
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName,email} =userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef   

  }

  export const createAuthUserWithEmailAndPassword= async(email, password) => {
      if (!email || !password)
          return;

          return await createUserWithEmailAndPassword(auth, email, password)
      
  }