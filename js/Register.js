let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let userPassword = document.getElementById("userPassword");
let createAccount = document.getElementById("createAccount");
createAccount.addEventListener("click", function () {
  localStorage.setItem("firstname", firstName.value);
  localStorage.setItem("lastname", lastName.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("userpassword", userPassword.value);
  window.location.assign("./../login.html");
});
