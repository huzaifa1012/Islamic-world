import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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





let verifiedButten = document.querySelector("#verified")
verifiedButten.addEventListener("click", function () {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log("Greate")
            console.log(user.uid)
            console.log(user.emailVerified)
            if (user.emailVerified == true) {
                window.location.href = ("./main.html")
                console.log("Your Email Is verified")
            }
         else {
            // User is signed out
            // ...
            // window.location.href = ("https://www.youtube.com/")
            alert("Your Email Is verified")

            console.log("You'r Email Is'nt Verified ")
        }}   
            const uid = user.uid;
            // ...
        
    });

})

