let dropdownC = document.querySelector(".country__wrap");
let decorationC = document.querySelector(".country__decoration")
let contentC = document.querySelector(".country__form")
let isOpenC = false;

let dropdownC1 = document.querySelector(".country__wrap--second");
let decorationC1 = document.querySelector(".country__decoration--second")
let contentC1 = document.querySelector(".country__form--second")
let isOpenC1 = false;

dropdownC.onclick = () => {
    if (isOpenC === false) {
        decorationC.style.display = "block";
        contentC.style.display = "flex";
        isOpenC = true;
    }
    else {
        decorationC.style.display = "none";
        contentC.style.display = "none";
        isOpenC = false;
    }
}

dropdownC1.onclick = () => {
    if (isOpenC1 === false) {
        decorationC1.style.display = "block";
        contentC1.style.display = "flex";
        isOpenC1 = true;
    }
    else {
        decorationC1.style.display = "none";
        contentC1.style.display = "none";
        isOpenC1 = false;
    }
}

document.querySelector(".login__form-singup").addEventListener("submit", function (event) {
    event.preventDefault();
});