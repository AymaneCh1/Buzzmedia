// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOQJHkKaX2o_O5JsxvftSAeogIK2S0EzE",
  authDomain: "buzzmedia-english-form.firebaseapp.com",
  projectId: "buzzmedia-english-form",
  storageBucket: "buzzmedia-english-form.appspot.com",
  messagingSenderId: "111626673022",
  appId: "1:111626673022:web:488a634940b4c5aabeb12f",
  measurementId: "G-79WKSLCDEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

form.addEventListener('submit', function(event) {
    // if(form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     form.classList.add('was-validated');
    // }
    event.preventDefault();
    var firstName = getInputVal('firstname');
    var lastName = getInputVal('lastname');
    var goal = getInputVal('goalselect');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var city = getInputVal('city');
    var country = document.querySelector('input[name="country"]:checked').value;
    var duration = getInputVal('duration');
    var businessType = getInputVal('businessType');
    var revenue = getInputVal('revenue');
    var currentMonthlyRevenue = getInputVal('currentMonthlyRevenue');
    var targetRevenue = getInputVal('targetRevenue');
    // var channels = document.querySelectorAll('.channels:checked');
    var currentMonthlySpend = getInputVal('currentMonthlySpend');
    var scalingStrategy = getInputVal('scalingStrategy');

    //Save message
    saveMessage(firstName, lastName, goal, email, phone, city, country, duration, businessType, revenue, currentMonthlyRevenue, targetRevenue,
        currentMonthlySpend, scalingStrategy);

});

var messagesRef = firebase.database().ref('messages');

function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(firstName, lastName, goal, email, phone, city, country, duration, businessType, revenue, currentMonthlyRevenue, targetRevenue,
   currentMonthlySpend, scalingStrategy) {
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            firstName: firstName,
            lastName: lastName,
            goal: goal,
            email: email,
            phone: phone,
            city: city,
            country: country,
            duration: duration,
            businessType: businessType,
            revenue: revenue,
            currentMonthlyRevenue: currentMonthlyRevenue,
            targetRevenue: targetRevenue,
            currentMonthlySpend: currentMonthlySpend,
            scalingStrategy: scalingStrategy
        })
    }