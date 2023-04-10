import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCVzmcDi2zkmJDMyOhH9fBjbIaPxx8vwKo",
    authDomain: "react-demo-91f04.firebaseapp.com",
    projectId: "react-demo-91f04",
    storageBucket: "react-demo-91f04.appspot.com",
    messagingSenderId: "372656638371",
    appId: "1:372656638371:web:62690bd470b83f794cb216",
    measurementId: "G-D1VVRWYQB6"
  };

  export default firebase.initializeApp(firebaseConfig)