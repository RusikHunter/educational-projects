const burgerMenu = document.getElementById('burgerMenu')
const burgerButtonOpen = document.getElementById('burgerButtonOpen')
const burgerButtonClose = document.getElementById('burgerButtonClose')

burgerButtonOpen.addEventListener('click', () => {
    burgerMenu.classList.add('show');

    console.log(1)
})

burgerButtonClose.addEventListener('click', () => {
    burgerMenu.classList.remove('show')
})