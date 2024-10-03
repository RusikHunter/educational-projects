let buttonCart = document.getElementById("cartMatchedItemsButton");

let contentCart = document.querySelector(".cart__matched-items-list");

let isOpenCart = false;

buttonCart.onclick = () => {
    if (isOpenCart === false) {
        contentCart.style.display = "flex";
        isOpenCart = true;
    }
    else {
        contentCart.style.display = "none";
        isOpenCart = false;
    }
}