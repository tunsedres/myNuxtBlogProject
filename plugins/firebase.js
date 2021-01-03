import * as firebase from 'firebase/app'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyC4h2fN07cTS8SJFZQ0AVLmcVAzah-tVQU",
    authDomain: "nuxt-blog-db822.firebaseapp.com",
    databaseURL: "https://nuxt-blog-db822-default-rtdb.firebaseio.com",
    projectId: "nuxt-blog-db822",
    storageBucket: "nuxt-blog-db822.appspot.com",
    messagingSenderId: "973023290470",
    appId: "1:973023290470:web:0391837973746c94a4b9a7"
  };
  
  let app = nil;

  if(!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
  }

  export default firebase;