let dropdown = document.querySelector(".dropdown__wrap");
let decoration = document.querySelector(".dropdown__decoration")
let content = document.querySelector(".dropdown__form")
let isOpen = false;

dropdown.onclick = () => {
    if (isOpen === false) {
        decoration.style.display = "block";
        content.style.display = "flex";
        isOpen = true;
    }
    else {
        decoration.style.display = "none";
        content.style.display = "none";
        isOpen = false;
    }
}