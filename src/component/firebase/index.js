import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyCMTvo86l2zc_DfHP5R19PP5aTUELwOVuw",
  authDomain: "doan-26414.firebaseapp.com",
  projectId: "doan-26414",
  storageBucket: "doan-26414.appspot.com",
  messagingSenderId: "214677023966",
  appId: "1:214677023966:web:429b339dec86d2d520a64f",
  measurementId: "G-K5PJ0NYB0L"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timetampsInSnapshots: true });
firebase.database()
firebase.auth();

export default firebase;

