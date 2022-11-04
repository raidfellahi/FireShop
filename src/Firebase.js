import firebase from "firebase";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOM,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket:import.meta.env. VITE_STORAGE_BUCK,
  messagingSenderId: import.meta.env.VITE_MESSSEID,
  appId: import.meta.env.VITE_APPID
  };        

 const FireApp = firebase.initializeApp(firebaseConfig)

 const auth = FireApp.auth()

 const db = FireApp.firestore().collection('todos')

 export {auth,db}
