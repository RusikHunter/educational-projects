class TextHandler {
    // const
    ROWS_MAX_COUNT = 5
    COUNT_OF_PROBABLE_SYNONYMS = 10

    // values

    constructor() {
        this.elements = []
        this.formattedText = "dsfdf"
        this.#_getElements()
        this.#_setValuesAndEvents()
    }

    #_getElements() {
        this.elements.formElement = document.querySelector('[data-js-form]')
        this.elements.textareaElement = document.querySelector('[data-js-textarea]')
        this.elements.submitButtonElement = document.querySelector('[data-js-submit]')
        this.elements.textContentElement = document.querySelector('[data-js-text-content]')
    }

    #_setValuesAndEvents() {
        this.elements.submitButtonElement.addEventListener('click', async (event) => {
            event.preventDefault()

            await this.#_formatDefaultText()
            this.#_showFormattedText()
            this.#_clearTextarea()
        })
    }

    async #_formatDefaultText() {
        const textToFormatting = this.elements.textareaElement.value
        let arrayOfWords = textToFormatting.split(' ')
        console.log(arrayOfWords)

        for (let i = 0; i < arrayOfWords.length; ++i) {
            const response = await fetch(`https://api.datamuse.com/words?ml=${arrayOfWords[i]}`)
            const synonyms = await response.json()

            if (response.ok && synonyms.length !== 0) {
                const randowWordIndex = Math.floor(Math.random() * this.COUNT_OF_PROBABLE_SYNONYMS) + 1

                arrayOfWords[i] = synonyms[randowWordIndex].word
            } else {
                let word = arrayOfWords[i].split('')

                word.sort(() => Math.random() - 0.5)

                const formattedWord = word.join('')

                arrayOfWords[i] = formattedWord
            }
        }

        console.log(arrayOfWords)

        this.formattedText = arrayOfWords.join(' ')
    }

    #_showFormattedText() {
        this.elements.textContentElement.innerHTML = this.formattedText
    }

    #_clearTextarea() {
        this.elements.textareaElement.value = ''
    }
}

export default TextHandler