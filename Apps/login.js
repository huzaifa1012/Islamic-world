
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyCH5jAE34BjXH1LHmYnyRwY3GtL37PNvfE",
  authDomain: "joinislamic.firebaseapp.com",
  projectId: "joinislamic",
  storageBucket: "joinislamic.appspot.com",
  messagingSenderId: "288650805072",
  appId: "1:288650805072:web:2f9d49797a66d94dc3b655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



/////////////////////Signin process Start ////////////////////////////
let signIn = document.getElementById("signin-btn");
signIn.addEventListener("click", function a() {
  let userEmail = document.getElementById("signin-email")
  let userPassword = document.getElementById("signin-password")
  const auth = getAuth();
  signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      alert("done")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("No Sorry")

    });

})

