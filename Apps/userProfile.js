import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, doc, getDoc, collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

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
const db = getFirestore()

const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;

        let profileImage = document.querySelector("#profile-image")
        let userName = document.querySelector("#user-name")
        let userEmail = document.querySelector("#user-email")
        let userUid = document.querySelector("#user-uid")

        const q = query(collection(db, "user"), where("uid", "==", auth.currentUser.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const user = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data()

                // profileImage.src=''
                userName.innerHTML = data.firstName + " " + data.lastName
                userEmail.innerHTML = data.email
                userUid.innerHTML = data.uid

                // console.log( data.firstName);
            });

        });




    } else {




    }
});
