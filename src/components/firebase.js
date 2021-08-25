import firebase from 'firebase'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMP-XXkkuHKW77aMhjOd6kZizzE8ZMvPI",
    authDomain: "tclone-dc479.firebaseapp.com",
    projectId: "tclone-dc479",
    storageBucket: "tclone-dc479.appspot.com",
    messagingSenderId: "673889614395",
    appId: "1:673889614395:web:7899a9ada9799aebc1ba1e",
    measurementId: "G-2RM3T39ZXE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db