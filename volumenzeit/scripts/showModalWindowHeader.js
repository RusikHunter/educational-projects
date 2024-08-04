let headerProfileBtn = document.getElementById("headerProfileButton");
let headerModalWindow = document.querySelector(".header__modal-window");

let isOpen = false;

headerProfileBtn.onclick = (e) => {
    if (isOpen == false) {
        headerModalWindow.style.display = "block";
        isOpen = true;
    }
    else {
        headerModalWindow.style.display = "none";
        isOpen = false;
    }
}