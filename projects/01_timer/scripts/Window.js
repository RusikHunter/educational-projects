import Timer from './Timer.js'
import Stopwatch from './Stopwatch.js'

class Window {
    constructor(timer, stopwatch) {
        this.timer = document.querySelector('.timer')
        this.stopwatch = document.querySelector('.stopwatch')

        this.toggleButtonElement = document.querySelector('.window__toggle-button')

        this.toggleButtonElement.addEventListener('click', () => {
            this.timer.classList.toggle('unvisible')
            this.stopwatch.classList.toggle('unvisible')
        })
    }

    toggle() {

    }
}

const timer = new Timer()
const stopwatch = new Stopwatch()

const window = new Window()
