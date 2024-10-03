document.getElementById("burgerButtonOpen").onclick = openBurger;
document.getElementById("burgerButtonClose").onclick = closeBurger;

document.getElementById("modalButtonOpen").onclick = openModal; //
document.getElementById("modalButtonClose").onclick = closeModal;

let modal = document.querySelector(".modal");
let burger = document.querySelector(".burger");
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

function openModal() {
    modal.style.display = "flex";
    all.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    all.style.overflow = "scroll";
}

//console.log(all)