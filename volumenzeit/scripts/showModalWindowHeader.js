/* скрипты, показывающие модальные окна в header */

/* показать/скрыть окно регистрации и логина */

let headerProfileBtn = document.getElementById("headerProfileButton");
let headerModalWindow = document.querySelector(".header__modal-window");

let isOpen = false;

headerProfileBtn.onclick = () => {
    if (isOpen == false) {
        headerModalWindow.style.display = "block";
        isOpen = true;
    }
    else {
        headerModalWindow.style.display = "none";
        isOpen = false;
    }
}

/* показать/скрыть бургер меню */

let burgerButtonOpen = document.getElementById("burgerButtonOpen");
let burgerButtonClose = document.getElementById("burgerButtonClose");

let burger = document.querySelector(".header__burger");

let all = document.querySelector("body");

burgerButtonOpen.onclick = () => {
    burger.style.display = "flex";
    all.style.overflow = "hidden";
}

burgerButtonClose.onclick = () => {
    burger.style.display = "none";
    all.style.overflow = "scroll";
}
