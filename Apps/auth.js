
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";



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
const auth = getAuth(app);
const db = getFirestore(app)

let expemail
let register = document.getElementById("RegisterBtn");
register.addEventListener("click", function () {

let email 
  let firstName = document.querySelector("#firstname")
  let lasttName = document.querySelector("#lastname")
  let userEmail = document.querySelector("#email");
  let userPassword = document.querySelector("#password");
  
  createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    
     savingDataOnFirestore()
    function savingDataOnFirestore() {
        const docRef = addDoc(collection(db, "user"), {
          firstName: firstName.value,
          lastName: lasttName.value,
          email: userEmail.value,
          uid: auth.currentUser.uid,
        });
        console.log("Document written with ID: ", docRef.id);
      }




    
    console.log("Account Created")
    
    // Saving Data On Firestore When User's registering.//
    
    
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
   
        console.log("Sorry We Cant Save data on firestore")
      

    });
    
    
    
  })
  
// SignUp Process Ends /////////////////////



// let newRegister = document.getElementById("RegisterBtn");
// newRegister.addEventListener("click", adding)
// // adding()

// // Here Im Exporting Data Of User To Access It AnyWhere On WEB
// export let firstName;
// export let lastName;
// export let email;
// export let securityKey;
// //


// async function adding() {
//   // Add a new document with a generated id.

//   const docRef = await addDoc(collection(db, "users"), {
//     firstName: firstName.value,
//     lastName: lasttName.value,
//     email: userEmail.value,
//     securityKey: userPassword

//   });
//   console.log("Document written with ID: ", docRef.id);

// }
