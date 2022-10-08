import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1MJesGx4BRl2V0dNT5hLWBF7zJWRhNM8",
  authDomain: "crwn-clothing-db-cff61.firebaseapp.com",
  projectId: "crwn-clothing-db-cff61",
  storageBucket: "crwn-clothing-db-cff61.appspot.com",
  messagingSenderId: "479612192144",
  appId: "1:479612192144:web:cc031d6ddee5b5b9da9f15"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
