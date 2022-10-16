
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, sendEmailVerification, deleteUser} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";




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
const db = getFirestore()

const user = auth.currentUser;

/////////////////


onAuthStateChanged(auth, (user) => {
    if (user) {
                console.log(user)
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
      console.log("Your Email Is Not verified")
        sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log(" A New Verification Mail Sent")
            // Email verification sent!
            // ...
        });
        window.location.href = ("../Indexes/verification.html")
   
    }}   
        const uid = user.uid;
        // ...
    
});
onAuthStateChanged(auth, (user) =>{
    if (user){
        console.log("USER IS CURRENTLY SIGNED In")
    }   
    else {
        console.log("You'r Not Here")
        window.location.href = ("../index.html")
    }



})


let signOut = document.getElementById("logout-icon")
signOut.addEventListener("click", function(){



    auth.signOut().then(alert("Hurry"))
})



        const docRef = doc(db, "greek", "YWpZSEHsIPxLgczTrlyt" );
  const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().email);
        docSnap.data()
        let abc = docSnap.data().firstName 
        let huzaifa = document.querySelector("#huzaifa")
        huzaifa.innerHTML = abc

    }

    // console.log(auth.currentUser.uid + "ASD")








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