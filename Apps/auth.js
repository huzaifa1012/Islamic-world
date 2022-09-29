
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
// const auth = getAuth(app);




///////////////////////////   Signup New User Scripts ///////////////////////

let signupBtn = document.getElementById("register-btn")
signupBtn.addEventListener("click", function () {
    const auth = getAuth();
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Register")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert("Not bro")

        });
})

// //////////////////SignUp Process Ends /////////////////////////////