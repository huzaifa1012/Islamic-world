
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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


//////////////////

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user)
        // console.log(user.uid)
        // console.log(user.emailVerified)
        if (user.emailVerified == true) {
            // window.location.href = ("./main.html")
            console.log(`                      And Is Awesome       
                                                                                     
            "Your Email Is verified"    `)
                 let uid = user.uid;
                 let displayName = user.displayName;
                 let email = user.email;
                 let photoURL = user.photoURL;
                 let emailVerified = user.emailVerified;
               

        }
     else {
      
        // User is signed out
        // ...
        // window.location.href = ("https://www.youtube.com/")
        alert("Your Email Is Not verified")
        
        sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
        });
        window.location.href = ("../Indexes/verification.html")
   
    }}   
        const uid = user.uid;
        // ...
    
});





// let userName = document.getElementById("user-name")
// userName.innerHTML === 





////////////////

    
// if (user) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.

//   const uid = user.uid;
//   console.log("Hurray")
// }
// else {
//     console.log(" sala ye to chalrha he else ")
// }
// 