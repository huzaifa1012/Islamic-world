
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH5jAE34BjXH1LHmYnyRwY3GtL37PNvfE",
  authDomain: "joinislamic.firebaseapp.com",
  projectId: "joinislamic",
  storageBucket: "joinislamic.appspot.com",
  messagingSenderId: "288650805072",
  appId: "1:288650805072:web:3a70df3fee40f3a3c3b655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



/////////////////////Signin process Start ////////////////////////////
let signIn = document.getElementById("signin-btn");
signIn.addEventListener("click", function () {
  let userEmail = document.getElementById("signin-email")
  let userPassword = document.getElementById("signin-password")
  // const auth = getAuth();
  signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Alhamdulillah")
      alert("GOOD")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Please Again")
    });

})

