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
  var goal = getInputVal("goalselect");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var city = getInputVal("city");
  var country = document.querySelector('input[name="country"]:checked').value;
  var duration = getInputVal("duration");
  var businessType = getInputVal("businessType");
  var revenue = getInputVal("revenue");
  var currentMonthlyRevenue = getInputVal("currentMonthlyRevenue");
  var targetRevenue = getInputVal("targetRevenue");
  // var channels = document.querySelectorAll('.channels:checked');
  var currentMonthlySpend = getInputVal("currentMonthlySpend");
  var scalingStrategy = getInputVal("scalingStrategy");

  //Save message
  saveMessage(
    firstName,
    lastName,
    goal,
    email,
    phone,
    city,
    country,
    duration,
    businessType,
    revenue,
    currentMonthlyRevenue,
    targetRevenue,
    currentMonthlySpend,
    scalingStrategy
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
  goal,
  email,
  phone,
  city,
  country,
  duration,
  businessType,
  revenue,
  currentMonthlyRevenue,
  targetRevenue,
  currentMonthlySpend,
  scalingStrategy
) {
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
    scalingStrategy: scalingStrategy,
  });
}
