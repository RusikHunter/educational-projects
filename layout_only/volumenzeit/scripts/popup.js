let popup = document.querySelector(".section--popup");

let bodyP = document.querySelector("body");

let SubmitP = document.getElementById("buyPaymentSubmit");

buyPaymentSubmit.onclick = (event) => {
    event.preventDefault();
    popup.style.display = "block";
    bodyP.style.overflow = "hidden";

}