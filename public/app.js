
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyBOQJHkKaX2o_O5JsxvftSAeogIK2S0EzE",
  authDomain: "buzzmedia-english-form.firebaseapp.com",
  databaseURL: "https://buzzmedia-english-form-default-rtdb.firebaseio.com",
  projectId: "buzzmedia-english-form",
  storageBucket: "buzzmedia-english-form.appspot.com",
  messagingSenderId: "111626673022",
  appId: "1:111626673022:web:488a634940b4c5aabeb12f",
  measurementId: "G-79WKSLCDEY"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

var form = document.querySelector(".main-form");
form.addEventListener("submit", function (event) {
  // if(form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();

  //     form.classList.add('was-validated');
  // }
  event.preventDefault();
  var firstName = getInputVal("firstname");
  var lastName = getInputVal("lastname");
  var email = getInputVal("email");

  //Save message
  saveMessage(
    firstName,
    lastName,
    email
  );
});

var messagesRef = firebase.database().ref("messages");

function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(
  firstName,
  lastName,
  email
) {
  var newMessageRef = messagesRef.push();

  newMessageRef.set({
    firstName: firstName,
    lastName: lastName,
    email: email
  });
}
