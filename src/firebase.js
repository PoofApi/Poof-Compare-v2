import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBwiWFbzdzLBxDaypek16_XDeRTAYcloVU",
  authDomain: "poofapibackend.firebaseapp.com",
  databaseURL: "https://poofapibackend.firebaseio.com",
  projectId: "poofapibackend",
  storageBucket: "poofapibackend.appspot.com",
  messagingSenderId: "245507653791",
  appId: "1:245507653791:web:b3faef531857119d63a2aa",
  measurementId: "G-RYQPSKFLHV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

//updates firestore settings
db.settings({ timestampsInSnapshots: true});


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();

export {
  database,
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
  db
};
