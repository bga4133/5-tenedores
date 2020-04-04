import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1ewakA24HT9jVJs7zdp5Q0B9e5B7ru8A",
  authDomain: "tenedores-3ef97.firebaseapp.com",
  databaseURL: "https://tenedores-3ef97.firebaseio.com",
  projectId: "tenedores-3ef97",
  storageBucket: "tenedores-3ef97.appspot.com",
  messagingSenderId: "376101575919",
  appId: "1:376101575919:web:db87af0f6a38fe39b9cf1a"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
