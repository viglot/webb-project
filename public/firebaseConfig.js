// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAlUwGQ5hP3qjyYwzA_T2PLfO-MHprCZT0",
    authDomain: "web-app-5d729.firebaseapp.com",
    databaseURL: "https://web-app-5d729-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "web-app-5d729",
    storageBucket: "web-app-5d729.appspot.com",
    messagingSenderId: "441408507022",
    appId: "1:441408507022:web:c752954464ce2ddb090ddf",
    measurementId: "G-8RE4TW280D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const db = getFirestore()

  const loginForm = document.getElementById('loginform')

  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
    .then((cred)=>{
      return cred.user.getIdToken()
    }).then((token)=>{
     document.cookie = `Bearer ${token}`
     window.location.href = '/profile'
    }) 
    .catch((err)=>{
      if(err)throw err  
    })
        
        })

  
  
  //lots of code