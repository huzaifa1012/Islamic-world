
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";




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
const db = getFirestore(app)


let register = document.getElementById("RegisterBtn");
register.addEventListener("click", function () {

  let userEmail = document.querySelector("#email");
  let userPassword = document.querySelector("#password");

  createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Greate")

      sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
          window.location.href = ("./verification.html")

          // ...
        });


      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log("Oops")

    });

})

// SignUp Process Ends /////////////////////



let newRegister = document.getElementById("RegisterBtn");
newRegister.addEventListener("click", adding)
// adding()
let userEmail = document.querySelector("#email");
let userPassword = document.querySelector("#password");

// Here Im Exporting Data Of User To Access It AnyWhere On WEB
export let firstName;
export let lastName;
export let email;
export let securityKey;
// 


async function adding() {
  // Add a new document with a generated id.

  let firstName = document.querySelector("#firstname")
  let lasttName = document.querySelector("#lastname")


  const docRef = await addDoc(collection(db, "users"), {
    firstName: firstName.value,
    lastName: lasttName.value,
    email: userEmail.value,
    securityKey: userPassword

  });
  console.log("Document written with ID: ", docRef.id);

}
