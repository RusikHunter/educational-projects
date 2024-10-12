class HangmanGame {
    // gameplay
    word // загаданное слово
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
        for (const button in this.elements.lettersElements) {
            this.elements.lettersElements[button].addEventListener('click', () => {
                if (this.isShowed) return

                // ... todo
            })
        }
    }

    // установить значения при новой игре (кадр (картинка) -1, попытка - 1)
    #initValues() {
        this.attempt = 1
        this.#renderFrame()
        this.isShowed = false
    }

    // отобразить кадр
    #renderFrame() {
        this.frame = `<img src="images/frame-${this.attempt}.png" alt="Frame${this.attempt}" class="hangman__image" data-js-image>`
        this.elements.imageWrapElement.innerHTML = this.frame
    }

    // создать слово
    #createNewWord() {
        this.word = "Apple"
        let wordElementContent = ""

        for (let i = 0; i < this.word.length; ++i) {
            wordElementContent += "_"
        }

        this.elements.wordElement.textContent = wordElementContent
    }

    // запуск приложения
    run() {
        this.#initValues()
        this.#createNewWord()
    }
}

const hangmanGame = new HangmanGame()
hangmanGame.run()