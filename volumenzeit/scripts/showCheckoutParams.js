let buttonFirst = document.getElementById("buyButtonArrowFirst")
let contentFirst1 = document.getElementById("buyFormFirst");
let contentFirst2 = document.querySelector(".buy__country-dropdown-wrap");
let contentFirst3 = document.getElementById("buyPersonInfoSubmit");

buttonFirst.onclick = () => {
    if (contentFirst1.style.display === "none" && contentFirst2.style.display === "none" && contentFirst3.style.display === "none") {
        contentFirst1.style.display = "flex";
        contentFirst2.style.display = "block";
        contentFirst3.style.display = "block";
    }
    else {
        contentFirst1.style.display = "none";
        contentFirst2.style.display = "none";
        contentFirst3.style.display = "none";
    }
}

let buttonSecond = document.getElementById("buyButtonArrowSecond")
let contentSecond = document.getElementById("buyFormSecond");

buttonSecond.onclick = () => {
    if (contentSecond.style.display === "none") {
        contentSecond.style.display = "flex";
    }
    else {
        contentSecond.style.display = "none";
    }
}

let buttonThird = document.getElementById("buyButtonArrowThird")
let contentThird = document.getElementById("buyFormThird");

buttonThird.onclick = () => {
    if (contentThird.style.display === "none") {
        contentThird.style.display = "flex";
    }
    else {
        contentThird.style.display = "none";
    }
}