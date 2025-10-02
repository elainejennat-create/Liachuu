const firebaseConfig = {
  apiKey: "AIzaSyB0byusrk6yiNGBLwnZa_QLF5c7gbCPdmw",
  authDomain: "liachuu.firebaseapp.com",
  projectId: "liachuu",
  storageBucket: "liachuu.firebasestorage.app",
  messagingSenderId: "395721469575",
  appId: "1:395721469575:web:e600f859e9e514745f1222",
  measurementId: "G-W16DFZ89HC"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// Sign Up
document.getElementById("signupForm").addEventListener("submit", e => {
  e.preventDefault();
  const email = signupEmail.value;
  const password = signupPassword.value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      db.collection("users").doc(user.user.uid).set({
        email: email,
        role: "user"
      });
      alert("Signup successful!");
    })
    .catch(error => alert(error.message));
});

// Log In
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;

  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      document.getElementById("profile").innerText = `Logged in as: ${email}`;
    })
    .catch(error => alert(error.message));
});
