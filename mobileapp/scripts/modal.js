document.getElementById("modalButtonOpen").onclick = openModal;
document.getElementById("modalButtonClose").onclick = closeModal;

let modal = document.querySelector(".modal");
let all = document.querySelector("body");

//console.log(modal.style.display); --> на память)

function openModal() {
    modal.style.display = "block";
    all.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    all.style.overflow = "scroll";
}

//console.log(all)