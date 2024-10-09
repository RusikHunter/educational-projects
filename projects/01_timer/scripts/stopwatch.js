class Stopwatch {
    // const
    SECOND = 1000

    // values
    minutes = 0
    seconds = 0

    stopwatchInterval = null

    constructor() {
        this.startButtonElement = document.querySelector('.stopwatch__button--start')
        this.stopButtonElement = document.querySelector('.stopwatch__button--stop')
        this.pauseButtonElement = document.querySelector('.stopwatch__button--pause')

        this.startButtonElement.addEventListener('click', () => {
            this.run()
        })

        this.stopButtonElement.addEventListener('click', () => {
            this.stopStopwatch()
        })

        this.pauseButtonElement.addEventListener('click', () => {
            this.pauseStopwatch()
        })

        this.outputTimeElement = document.querySelector('.stopwatch__output')
    }

    showMinutesAndSeconds() {
        let customeMinutes = this.minutes
        let customeSeconds = this.seconds

        if (customeMinutes < 10) customeMinutes = `0${customeMinutes}`
        if (customeSeconds < 10) customeSeconds = `0${customeSeconds}`

        this.outputTimeElement.textContent = `${customeMinutes}:${customeSeconds}`
    }

    startStopwatch() {
        this.stopwatchInterval = setInterval(() => {
            if (this.seconds === 59) {
                this.minutes++

                this.seconds = 0
            } else {
                this.seconds++
            }

            this.showMinutesAndSeconds()
        }, this.SECOND)
    }

    stopStopwatch() {
        clearInterval(this.stopwatchInterval)

        this.minutes = 0
        this.seconds = 0

        this.outputTimeElement.textContent = `00:00`
    }

    run() {
        this.startStopwatch()
    }
}

const stopwatch = new Stopwatch()