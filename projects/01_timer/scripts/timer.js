class Timer {
    time = 0

    constructor() {
        this.outputTimeElement = document.querySelector('.timer__output--time') // h1, в который выводится время
        this.outputMessageElement = document.querySelector('.timer__output--message') // p, в который выводится сообщение по истечению таймера
        this.inputMinutesElement = document.querySelector('.timer__minutes') // ввод минут
        this.inputSecondsElement = document.querySelector('.timer__seconds') // ввод секунд
        this.startButtonElement = document.querySelector('.timer__button--start') // кнопка старта

        this.startButtonElement.addEventListener('click', () => {
            this.startTimer()
        })
    }

    startTimer() {
        console.log(this.inputMinutesElement.value)
        console.log(this.inputSecondsElement.value)

        if (this.inputMinutesElement.value === "0" && this.inputSecondsElement.value === "0") {
            this.outputMessageElement.style.visibility = "visible";
            this.outputMessageElement.textContent = "Set the time!"
        }
    }
}

const timer = new Timer()