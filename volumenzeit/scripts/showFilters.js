let grid = document.querySelector(".list__grid");

let title = document.querySelector(".list__title--filters");

let buttonClose = document.querySelector(".list__button--close");

let content = document.querySelector(".list__filter-content");

let isOpenF = false;

buttonClose.onclick = () => {
    if (isOpenF === false) {
        grid.style.gridTemplateRows = "620px 1000px 200px";
        title.style.display = "none";
        buttonClose.style.top = "calc(100% - 91px)";
        content.style.display = "block";
        isOpenF = true;
    }
    else {
        grid.style.gridTemplateRows = "100px 1000px 200px";
        title.style.display = "block";
        buttonClose.style.top = "22px";
        content.style.display = "none";
        isOpenF = false;
    }
}
