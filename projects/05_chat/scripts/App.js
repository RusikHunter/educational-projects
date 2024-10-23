class ChatHandler {
    STRING_MAX_LENGTH = 30

    userName = "third"
    userIcon = "images/icon-2.png"
    elements = {}

    constructor() {
        this.#getElements()
        this.#setValuesAndEvents()
    }

    #getElements() {
        this.elements.toggleButtonElement = document.querySelector("[data-js-toggle]")
        this.elements.usernameElement = document.querySelector("[data-js-username]")
        this.elements.messagesElement = document.querySelector("[data-js-messages]")
        this.elements.removeButtonElement = document.querySelector("[data-js-remove-button]")
        this.elements.formElement = document.querySelector("[data-js-form]")
        this.elements.inputElement = document.querySelector("[data-js-input]")
        this.elements.sendButtonElement = document.querySelector("[data-js-send-button]")
    }

    #setValuesAndEvents() {
        this.#loadMessagesFromLocalStorage()

        this.elements.usernameElement.textContent = this.userName

        this.elements.toggleButtonElement.addEventListener('click', (event) => {
            console.log(event.target)
            event.target.classList.toggle('toggle-active')

            if (event.target.classList.contains('toggle-active')) {
                this.#setDarkTheme()
            } else {
                this.#setLightTheme()
            }
        })

        this.elements.sendButtonElement.addEventListener("click", (event) => {
            event.preventDefault()

            this.#sendMessage()
        })

        this.elements.removeButtonElement.addEventListener("click", (event) => {
            const elementsToRemove = document.querySelectorAll('[data-js-message]')

            elementsToRemove.forEach(element => element.remove())

            localStorage.clear()
        })

        window.addEventListener('storage', () => {
            console.log('Storage updated!')
            this.#loadMessagesFromLocalStorage()
        })
    }

    #setLightTheme() {
        document.documentElement.style.setProperty('--background-color', 'linear-gradient(90deg, rgba(98, 160, 255, 1) 0%, rgba(64, 135, 153, 1) 100%)')
        document.documentElement.style.setProperty('--window-color', '#62a0ff')
        document.documentElement.style.setProperty('--chat-color', '#5095ff')
        document.documentElement.style.setProperty('--text-color', '#FFFFFF')
        document.documentElement.style.setProperty('--element-color', '#448cff')
    }

    #setDarkTheme() {
        document.documentElement.style.setProperty('--background-color', 'linear-gradient(90deg, rgba(16,37,68,1) 0%, rgba(21,8,42,1) 100%)')
        document.documentElement.style.setProperty('--window-color', '#183057')
        document.documentElement.style.setProperty('--chat-color', '#10223e')
        document.documentElement.style.setProperty('--text-color', '#FFFFFF')
        document.documentElement.style.setProperty('--element-color', '#07152a')
    }

    #getCurrentTime() {
        const now = new Date()

        const day = String(now.getDate()).padStart(2, '0')
        const month = String(now.getMonth() + 1).padStart(2, '0')
        const year = now.getFullYear()

        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')

        return `${day}.${month}.${year} ${hours}:${minutes}`
    }

    #insertLineBreaks(message) {
        let arrayOfWords = message.split(' ')
        let formattedMessage = []

        for (const word of arrayOfWords) {
            if (word.length + 1 > this.STRING_MAX_LENGTH) {
                // если слово длиннее максимума
                const iterationsToInsert = Math.floor(word.length / this.STRING_MAX_LENGTH)

                let formattedWord = word.split('')

                for (let i = 1; i <= iterationsToInsert; ++i) {
                    formattedWord.splice(i === 1 ? this.STRING_MAX_LENGTH * i : this.STRING_MAX_LENGTH * i + (i - 1), 0, '\n')
                }

                formattedMessage.push(formattedWord.join(''))
            } else {
                formattedMessage.push(word)
            }
        }

        return formattedMessage.join(' ')
    }

    #changeOwnMessages() {
        const messages = document.querySelectorAll('[data-js-message]')

        if (messages) {
            for (const message of messages) {
                if (message.getAttribute('data-js-message') === this.userName) {
                    message.classList.add('own')
                }
            }
        }
    }

    #addMessageToLocalStorage(message) {
        localStorage.setItem(`${Date.now()}`, message)
    }

    #loadMessagesFromLocalStorage() {
        this.elements.messagesElement.innerHTML = ''

        const messages = []

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)

            messages.push(key)
        }

        messages.sort()

        for (const key of messages) {
            const message = localStorage.getItem(key)

            this.elements.messagesElement.insertAdjacentHTML('beforeend', message)
        }

        this.#changeOwnMessages()
    }

    async #sendMessage() {
        setTimeout(() => {
            const formData = new FormData(this.elements.formElement)

            const messageText = formData.get('message')

            const messageHTML = `<div class="chat__message message" data-js-message="${this.userName}">
          <div class="message__info-wrap">
               <img src="${this.userIcon}" alt="UserIcon" class="message__user-icon">
              <p class="message__username" data-js-message-username>${this.userName}</p>
                <span class="message__time">${this.#getCurrentTime()}</span>
          </div>
            <p class="message__value">${this.#insertLineBreaks(messageText)}</p>
        </div>`

            this.#addMessageToLocalStorage(messageHTML)

            this.#loadMessagesFromLocalStorage()

            this.elements.inputElement.value = ''
        }, 100)
    }
}

const chatHandler = new ChatHandler()