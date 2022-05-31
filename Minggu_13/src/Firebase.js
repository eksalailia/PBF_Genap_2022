import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAoYbHgYb8hrIbFR7ijd5yc8SzUzGsoD4k",
  authDomain: "crud-firestore-7d4b9.firebaseapp.com",
  projectId: "crud-firestore-7d4b9",
  storageBucket: "crud-firestore-7d4b9.appspot.com",
  messagingSenderId: "218447238158",
  appId: "1:218447238158:web:6c5073f06b91b8ac31585f",
  measurementId: "G-YMJQY2XQNT"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
const init = firebase.initializeApp(config);
export const firebaseAuthentication = init.auth();

// const init = firebase.initializeApp(config);
// export const firebaseAuthentication = init.auth();

export default firebase;