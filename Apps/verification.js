import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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
const user = auth.currentUser;



// verifiedButten.addEventListener("click",
autochecking()
function autochecking() {
    
    
    onAuthStateChanged(auth, (user) => {
      
        
      
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // console.log(user.uid)
            console.log("You'r Registering Greate , Now We Are Verifying Your Email")
            // console.log(user.emailVerified)
            if (user.emailVerified == true) {
                window.location.href = ("./main.html")
                console.log("Your Email Is verified")
            }
            else {
                // User is signed out
                // ...
                // window.location.href = ("https://www.youtube.com/")
                // alert("Your Email Is Not verified")

                console.log("You'r Email Is'nt Verified ")
            }
        
        const uid = user.uid;
        // ...

        let go = document.getElementById("go")
        go.addEventListener("click", function(){
            location.reload();
        })
    });




}

// )        


let resendEmailVerif = document.getElementById("resend")
resendEmailVerif.addEventListener("click", function () {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
        });
    console.log("We've Sent Again You An Verification Email")

})
/////////////////////////Here We're working on password reset///////////////////////////////
