let dropdownC = document.querySelector(".country__wrap");
let decorationC = document.querySelector(".country__decoration")
let contentC = document.querySelector(".country__form")
let isOpenC = false;

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