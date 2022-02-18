import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBkBephg6k595hwFYmFTui-wY2xWoojD5E',
  authDomain: 'music-f0313.firebaseapp.com',
  projectId: 'music-f0313',
  storageBucket: 'music-f0313.appspot.com',
  appId: '1:757819125918:web:af7bd4aab4653356358b8f',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const auth = firebase.auth();
export const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

export const usersCollection = db.collection('users');
export const songsCollection = db.collection('songs');
export const commentsCollection = db.collection('comments');
