document.getElementById("burgerButtonOpen").onclick = openBurger;
document.getElementById("burgerButtonClose").onclick = closeBurger;

let burger = document.getElementById("burgerModalWindow");
let all = document.querySelector("body");

//console.log(modal.style.display); --> на память)

function openBurger() {
    burger.style.display = "block";
    all.style.overflow = "hidden";
}

function closeBurger() {
    burger.style.display = "none";
    all.style.overflow = "scroll";
}