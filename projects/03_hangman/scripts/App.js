import * as words from './words.js'

class HangmanGame {
    // gameplay
    word // загаданное слово
    solvedLetters = "" // разгаданные буквы
    attempt // попытка
    frame // кадр (картинка)
    isShowed // переменная показывает, отображено ли слово (если да, то при нажатии на буквы ничего не происходит)

    // elements
    elements = {} // объект со всеми элементами

    constructor() {
        this.#getElements()
        this.#setAttributes()
        console.log(this.elements)
    }

    // получить элементы
    #getElements() {
        // окно с кадрами
        this.elements.imageWrapElement = document.querySelector('[data-js-image-wrap]')

        // слово
        this.elements.wordElement = document.querySelector('[data-js-word]')

        // кнопки с буквами
        const letters = Array.from(document.querySelectorAll('[data-js-button-letter]'))

        this.elements.lettersElements = letters.reduce((objectWithLetters, button) => {
            const letter = button.getAttribute('data-js-button-letter')
            objectWithLetters[letter] = button

            return objectWithLetters
        }, {})

        // кнопка старта новой игры
        this.elements.buttonStartElement = document.querySelector('[data-js-button-start]')
    }

    // назначить им аттрибуты
    #setAttributes() {
        // обработчик на кнопку запуска игры
        this.elements.buttonStartElement.addEventListener('click', () => {
            this.run()
        })

        // обработчики на кнопки с буквами
        for (const key in this.elements.lettersElements) {
            this.elements.lettersElements[key].addEventListener('click', () => {
                this.#checkLetter(key)
            })
        }
    }

    // установить значения при новой игре (кадр (картинка) -1, попытка - 1)
    #initValues() {
        this.#createNewWord()
        this.attempt = 1
        this.#renderFrame()
        this.#setLettersEnabled()
        this.isShowed = false
    }

    // отобразить кадр
    #renderFrame() {
        this.frame = `<img src="images/frame-${this.attempt}.png" alt="Frame${this.attempt}" class="hangman__image" data-js-image>`
        this.elements.imageWrapElement.innerHTML = this.frame
    }

    #renderWord() {
        this.elements.wordElement.textContent = this.solvedLetters
    }

    #checkLetter(key) {
        if (this.isShowed) return

        const letter = key

        if (this.#hasLetter(letter)) {
            const indexes = this.#findAllOccurrences(letter)
            console.log(indexes)

            for (let i = 0; i < this.solvedLetters.length; ++i) {
                if (indexes.includes(i)) {
                    this.solvedLetters = this.#replaceCharAt(letter, i)
                    console.log(this.solvedLetters)
                }
            }

            this.#renderWord()
        } else {
            this.attempt++
            this.#renderFrame()

            if (this.attempt === 9) {
                this.isShowed = true
                this.elements.wordElement.textContent = this.word
            }
        }

        this.elements.lettersElements[key].textContent = "X"
        this.elements.lettersElements[key].disabled = true
    }

    #setLettersEnabled() {
        for (const key in this.elements.lettersElements) {
            this.elements.lettersElements[key].textContent = key.toUpperCase()
            this.elements.lettersElements[key].disabled = false
        }
    }

    // создать слово
    #createNewWord() {
        this.word = words.getRandomWord()

        this.solvedLetters = ""
        for (let i = 0; i < this.word.length; ++i) {
            this.solvedLetters += "_"
        }

        this.#renderWord()
        console.log(this.word)
    }

    #hasLetter(letter) {
        return this.word.includes(letter)
    }

    #findAllOccurrences(char) {
        const indices = []
        let index = this.word.indexOf(char)

        while (index !== -1) {
            indices.push(index)
            index = this.word.indexOf(char, index + 1)
        }

        return indices
    }

    #replaceCharAt(char, index) {
        return this.solvedLetters.slice(0, index) + char + this.solvedLetters.slice(index + 1)
    }

    // запуск приложения
    run() {
        this.#initValues()
    }
}

const hangmanGame = new HangmanGame()
hangmanGame.run()