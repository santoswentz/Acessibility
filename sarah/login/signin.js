var buttonsignin = document.querySelector("#signin");
var buttonsignup = document.querySelector("#signup");

var body = document.querySelector("body");

buttonsignin.addEventListener("click", function () {
    body.className = "sign-in-js"
} );

buttonsignup.addEventListener("click", function () {
    body.className = "sign-up-js"
} );