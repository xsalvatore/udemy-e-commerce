import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCCni9VzU80891INWWeyNJcuOGKcAZVtLI',
  authDomain: 'udemy-e-commerce-db-a0cb1.firebaseapp.com',
  databaseURL: 'https://udemy-e-commerce-db-a0cb1.firebaseio.com',
  projectId: 'udemy-e-commerce-db-a0cb1',
  storageBucket: 'udemy-e-commerce-db-a0cb1.appspot.com',
  messagingSenderId: '217462335835',
  appId: '1:217462335835:web:b26b28d3f64c1063bb527e',
  measurementId: 'G-TTQZSLMJEL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const store = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
