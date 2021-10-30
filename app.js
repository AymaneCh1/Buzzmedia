import './node_modules/bootstrap-icons/'

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
  var help = getInputVal("");
  var email = getInputVal("email");
  var 

  console.log(firstName)
});


function getInputVal(id) {
  document.getElementById(id);
}