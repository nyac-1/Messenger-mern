import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB82qJtKzc3mJG1BessLdFUdRIm1ZH0Ylc",
  authDomain: "messenger-clone-bd659.firebaseapp.com",
  projectId: "messenger-clone-bd659",
  storageBucket: "messenger-clone-bd659.appspot.com",
  messagingSenderId: "86870277001",
  appId: "1:86870277001:web:8075b57b7c0a5a08c0ff58",
  measurementId: "G-TSF41QPNK7"
})

const db = firebaseApp.firestore()

export default db