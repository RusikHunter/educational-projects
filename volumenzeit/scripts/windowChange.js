let loginButton = document.getElementById("loginInputRadio1");
let signupButton = document.getElementById("loginInputRadio2");

let loginContent = document.querySelector(".login__login-content");
let signupContent = document.querySelector(".login__signup-content");

loginButton.onclick = () => {
    loginContent.style.display = "flex";
    signupContent.style.display = "none";
}

signupButton.onclick = () => {
    loginContent.style.display = "none";
    signupContent.style.display = "flex";
}
