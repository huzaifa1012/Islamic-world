
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

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
const auth = getAuth();



let register = document.getElementById("register-btn")
register.addEventListener("click", function b(){
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    console.log(email.value,password.value)
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("NOT DONE")
    console.log(user)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("done")
    // ..
  });

})

// //////////////////SignUp Process Ends /////////////////////////////