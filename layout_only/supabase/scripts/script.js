// burger

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

// menu

const menu = document.querySelector('dashboard__menu')

const menuButtons = document.getElementsByClassName('dashboard__menu-button')

let activeButton = menuButtons[0]

for (let i = 0; i < menuButtons.length; ++i) {
    menuButtons[i].addEventListener('click', () => {
        activeButton.classList.remove('active')

        menuButtons[i].classList.add('active')

        activeButton = menuButtons[i]
    })
}

// menu 2

const menu2 = document.querySelector('simple__menu')

const menuButtons2 = document.getElementsByClassName('simple__menu-button')

let activeButton2 = menuButtons2[0]

for (let i = 0; i < menuButtons2.length; ++i) {
    menuButtons2[i].addEventListener('click', () => {
        activeButton2.classList.remove('active')

        menuButtons2[i].classList.add('active')

        activeButton2 = menuButtons2[i]
    })
}
