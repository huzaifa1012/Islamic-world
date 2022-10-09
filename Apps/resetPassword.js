import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


// import { firebaseConfig } from "./login";

const firebaseConfig = {
    apiKey: "AIzaSyCH5jAE34BjXH1LHmYnyRwY3GtL37PNvfE",
    authDomain: "joinislamic.firebaseapp.com",
    projectId: "joinislamic",
    storageBucket: "joinislamic.appspot.com",
    messagingSenderId: "288650805072",
    appId: "1:288650805072:web:3a70df3fee40f3a3c3b655"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth();
const user = auth.currentUser;
// console.log(user)




let forgetPass = document.getElementById("forget-link")
forgetPass.addEventListener('click', function(){
    let email = document.getElementById("emailForPassReset")

    
    sendPasswordResetEmail(auth, email.value)
    .then(() => {
      // Password reset email sent!
      // ..
      console.log("We've Sent And Pssword Verification On Your Gmail")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        "We Cant Send Password reset mail"
      )
      // ..
    });
})

let goToSignIn = document.getElementById("go-to-signin")
goToSignIn.addEventListener('click', ()=>{
    window.location.assign("../index.html")
    
})