let body = document.querySelector("body");

let buttonCartOpen = document.getElementById("headerCartButton");

let buttonCartClose = document.getElementById("cartButtonClose");

let cart = document.querySelector(".section--cart");

buttonCartOpen.onclick = () => {
    cart.style.display = "flex";
    body.style.marginLeft = "-16px";
    body.style.overflow = "hidden";
}

buttonCartClose.onclick = () => {
    cart.style.display = "none";
    body.style.marginLeft = "0";
    body.style.overflow = "scroll";
}


