document.getElementById("burgerButtonOpen").onclick = openBurger;
document.getElementById("burgerButtonClose").onclick = closeBurger;

let burger = document.getElementById("burgerModalWindow");

//console.log(modal.style.display); --> на память)

function openBurger() {
    burger.style.display = "block";
}

function closeBurger() {
    burger.style.display = "none";
}