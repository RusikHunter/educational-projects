class Calculator {
    constructor() {
        this.#getElements()
    }

    #getElements() {
        // output
        this.outputElement = document.querySelector('[data-js-output]')

        // number buttons
        this.numberButtons = Array.from(document.querySelectorAll('[data-js-number]'))

        this.numberButtons.sort((a, b) => {
            return a.getAttribute('data-js-number') - b.getAttribute('data-js-number')
        })

        // operation buttons

        this.operationButtons = Array.from(document.querySelectorAll('[data-js-operation]'))

        this.operationButtons.sort((a, b) => {
            return a.getAttribute('data-js-operation') - b.getAttribute('data-js-operation')
        })

        // change buttons

        this.changeButtons = Array.from(document.querySelectorAll('[data-js-change]'))

        // main

        this.buttonRemoveElement = document.querySelector('[data-js-remove]')

        this.buttonRemoveAllElement = document.querySelector('[data-js-remove-all]')

        this.buttonResultElement = document.querySelector('[data-js-result]')
    }

    #addEvents() {

    }
}

const calculator = new Calculator()