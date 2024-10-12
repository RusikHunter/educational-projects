class HangmanGame {
    elements = {
        letters: {
            a: 'a',
            b: 'b',
            c: 'c',
        }
    }

    constructor() {
        this.#getElements()
        console.log(this.elements)
    }

    #getElements() {
        this.elements.imageWrapElement = document.querySelector('[data-js-image-wrap]')

        this.elements.word = document.querySelector('[data-js-word]')

        const letters = Array.from(document.querySelectorAll('[data-js-button-letter]'))

        this.elements.letters = letters.reduce((objectWithLetters, button) => {
            const letter = button.getAttribute('data-js-button-letter')
            objectWithLetters[letter] = button

            return objectWithLetters
        }, {})
    }

    #setAttributes() {

    }

    #run() {

    }
}

new HangmanGame()