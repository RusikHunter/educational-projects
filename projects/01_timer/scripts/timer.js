class Timer {
    // const
    SECOND = 1000
    MESSAGE = "Allahu Akbar!"
    MESSAGE_IF_OUTPUT_EMPTY = "Set time!"

    // для рассчетов внутри скрипта
    time = null
    countingEverySecondInterval = null

    // для кастомизации
    minutes = null
    seconds = null

    constructor() {
        // input
        this.minutesInputElement = document.querySelector('.timer__minutes') // ввод минут
        this.secondsInputElement = document.querySelector('.timer__seconds') // ввод секунд
        this.startButtonElement = document.querySelector('.timer__button--start') // кнопка запуска таймера

        // обработчик событий на кнопку
        this.startButtonElement.addEventListener('click', () => {
            this.run()
        })

        // output
        this.outputTimeElement = document.querySelector('.timer__output--time') // элемент заголовка, который нужен для вывода времени
        this.outputMessageElement = document.querySelector('.timer__output--message') // элемент параграфа, который нужен для вывода сообщения после окончания
    }

    // функция, которая забирает минуты и секунды из инпутов
    getMinutesAndSeconds() {
        this.minutes = parseInt(this.minutesInputElement.value) || 0
        this.seconds = parseInt(this.secondsInputElement.value) || 0
    }

    // функция, которая устанавливает те же минуты и секунды в заголовок для пользователя
    showMinutesAndSeconds() {
        let customeMinutes = this.minutes
        let customeSeconds = this.seconds

        if (customeMinutes < 10) {
            customeMinutes = `0${customeMinutes}`
        }

        if (customeSeconds < 10) {
            customeSeconds = `0${customeSeconds}`
        }

        this.outputTimeElement.textContent = `${customeMinutes}:${customeSeconds}`
    }

    // функция, которая конвертирует минуты и секунды в миллисекунды для работы setTimeout
    convertTimeToMS() {
        this.time = this.minutes * (60 * this.SECOND) + this.seconds * this.SECOND

        console.log(this.time)
    }

    startTimer() {
        this.countingEverySecondInterval = setInterval(() => {
            if (this.seconds === 0) {
                this.seconds = 59

                --this.minutes
            } else {
                --this.seconds
            }

            if (this.minutes === 0 && this.seconds === 0) {
                clearInterval(this.countingEverySecondInterval)
                this.seconds = 0
                this.showMinutesAndSeconds()
                this.showMessage()
                return
            }

            this.showMinutesAndSeconds()
        }, this.SECOND)
    }

    isEmpty() {
        if (+this.minutes === 0 && +this.seconds === 0) {
            this.showMessageIfOutputEmpty()

            return true
        }
    }

    showMessage() {
        this.outputMessageElement.textContent = this.MESSAGE
        this.outputMessageElement.style.visibility = "visible"
    }

    showMessageIfOutputEmpty() {
        this.minutes = 0
        this.seconds = 0
        this.showMinutesAndSeconds()
        this.outputMessageElement.textContent = this.MESSAGE_IF_OUTPUT_EMPTY
        this.outputMessageElement.style.visibility = "visible"
    }

    hideMessage() {
        this.outputMessageElement.style.visibility = "hidden"
    }

    run() {
        if (this.countingEverySecondInterval !== null) clearInterval(this.countingEverySecondInterval)

        this.hideMessage()

        this.getMinutesAndSeconds()

        if (this.isEmpty()) return

        this.showMinutesAndSeconds()
        this.convertTimeToMS()
        this.startTimer()
    }
}

const timer = new Timer()