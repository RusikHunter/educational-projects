class Calculator {
    firstNumber = ""
    secondNumber = ""
    operator = ""

    constructor() {
        this.#getElements()
        this.#addEvents()

        console.log(this.operationButtons)
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
        this.numberButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (this.operator === "") {
                    this.firstNumber += index
                } else if (this.operator !== "") {
                    this.secondNumber += index
                }

                this.#showNumber()
            })
        });

        this.operationButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (this.firstNumber === "") return

                let operation

                switch (index) {
                    case 0:
                        operation = "+"
                        break
                    case 1:
                        operation = "-"
                        break
                    case 2:
                        operation = "*"
                        break
                    case 3:
                        operation = "/"
                        break
                }

                this.operator = operation

                this.#showNumber()
            })
        })

        this.changeButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (this.firstNumber === "") return

                let operation

                if (index === 0) {
                    if (this.firstNumber !== "" && this.secondNumber === "") {
                        this.firstNumber = String(Math.pow(this.firstNumber, 2))
                    } else {
                        this.secondNumber = String(Math.pow(this.secondNumber, 2))
                    }
                } else if (index === 1) {
                    if (this.firstNumber !== "" && this.secondNumber === "") {
                        this.firstNumber = String(Math.sqrt(Math.abs(this.firstNumber), 2))
                    } else {
                        this.secondNumber = String(Math.sqrt(Math.abs(this.secondNumber), 2))
                    }
                } else if (index === 2) {
                    if (this.firstNumber !== "" && this.secondNumber === "") {
                        if (this.firstNumber.startsWith('-')) {
                            this.firstNumber = this.firstNumber.slice(1)
                        } else {
                            this.firstNumber = `-${this.firstNumber}`
                        }
                    } else {
                        if (this.secondNumber.startsWith('-')) {
                            this.secondNumber = this.secondNumber.slice(1)
                        } else {
                            this.secondNumber = `-${this.secondNumber}`
                        }
                    }
                } else {
                    if (this.firstNumber !== "" && this.secondNumber === "") {
                        const floatSymbolIndex = this.firstNumber.indexOf('.')

                        console.log(floatSymbolIndex)

                        if (floatSymbolIndex === -1) {
                            console.log('a')
                            this.firstNumber += '.'
                        } else {
                            console.log('b')
                            this.firstNumber = this.firstNumber.slice(0, floatSymbolIndex)
                        }
                    } else {
                        const floatSymbolIndex = this.secondNumber.indexOf('.')

                        console.log(floatSymbolIndex)

                        if (floatSymbolIndex === -1) {
                            console.log('a')
                            this.secondNumber += '.'
                        } else {
                            console.log('b')
                            this.secondNumber = this.secondNumber.slice(0, floatSymbolIndex)
                        }
                    }
                }

                this.#showNumber()
            })
        })

        this.buttonRemoveElement.addEventListener('click', () => {
            if (this.operator === "") {
                this.firstNumber = this.firstNumber.slice(0, -1)
            } else if (this.operator !== "" && this.secondNumber === "") {
                this.operator = ""
            } else {
                this.secondNumber = this.secondNumber.slice(0, -1)
            }

            this.#showNumber()
        })

        this.buttonRemoveAllElement.addEventListener('click', () => {
            this.outputElement.textContent = ""
            this.firstNumber = ""
            this.secondNumber = ""
            this.operator = ""
        })
    }

    #showNumber() {
        this.outputElement.textContent = this.firstNumber

        if (this.operator !== "") {
            this.outputElement.textContent += this.operator
        }

        if (this.secondNumber !== "") {
            this.outputElement.textContent += this.secondNumber
        }
    }
}

const calculator = new Calculator()