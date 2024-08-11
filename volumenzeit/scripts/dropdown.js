let dropdownD = document.querySelector(".dropdown__wrap");
let decorationD = document.querySelector(".dropdown__decoration")
let contentD = document.querySelector(".dropdown__form")
let isOpenD = false;

dropdownD.onclick = () => {
    if (isOpenD === false) {
        decorationD.style.display = "block";
        contentD.style.display = "flex";
        isOpenD = true;
    }
    else {
        decorationD.style.display = "none";
        contentD.style.display = "none";
        isOpenD = false;
    }
}