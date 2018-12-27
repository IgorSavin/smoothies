import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
let config = {
  apiKey: "AIzaSyDo1VaysJ0sxMhzuR9GKlMI1jSGExHq9Eo",
  authDomain: "smoothies-7e32c.firebaseapp.com",
  databaseURL: "https://smoothies-7e32c.firebaseio.com",
  projectId: "smoothies-7e32c",
  storageBucket: "smoothies-7e32c.appspot.com",
  messagingSenderId: "1052998985243"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

//sport firestore database
export default firebaseApp.firestore()