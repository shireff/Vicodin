let email1 = document.getElementById("email1");
let userPassword1 = document.getElementById("userPassword1");
let signIn = document.getElementById("signIn");
signIn.addEventListener("click", function () {
  let x = localStorage.getItem("email");
  let y = localStorage.getItem("userpassword");
  if(email1.value ==x && userPassword1.value==y){
    window.location.assign("./../index.html")
  }else{
    alert("enter correct value")
  }
});
