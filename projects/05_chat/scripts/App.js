class ChatHandler {
    STRING_MAX_LENGTH = 5

    userName = "dmfshove"
    userIcon = "images/icon-2.png"
    elements = {}

    constructor() {
        this.#getElements()
        this.#setValuesAndEvents()
    }

    #getElements() {
        this.elements.usernameElement = document.querySelector("[data-js-username]")
        this.elements.usericonElement = document.querySelector("[data-js-usericon]")
        this.elements.messagesElement = document.querySelector("[data-js-messages]")
        this.elements.removeButtonElement = document.querySelector("[data-js-remove-button]")
        this.elements.formElement = document.querySelector("[data-js-form]")
        this.elements.inputElement = document.querySelector("[data-js-input]")
        this.elements.sendButtonElement = document.querySelector("[data-js-send-button]")
    }

    #setValuesAndEvents() {
        this.elements.usernameElement.textContent = this.userName
        this.elements.usericonElement.textContent = this.userIcon

        this.elements.sendButtonElement.addEventListener("click", (event) => {
            event.preventDefault()

            this.#sendMessage()

            this.elements.inputElement.value = ''
        })

        this.elements.removeButtonElement.addEventListener("click", (event) => {
            const elementsToRemove = document.querySelectorAll('[data-js-message]')

            elementsToRemove.forEach(element => element.remove())
        })
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

    #sendMessage() {
        const formData = new FormData(this.elements.formElement)

        const message = formData.get('message')
        console.log(message)

        const messageHTML = `<div class="chat__message message" data-js-message>
          <div class="message__info-wrap">
               <img src="${this.userIcon}" alt="UserIcon" class="message__user-icon" data-js-usericon>
              <p class="message__username">${this.userName}</p>
                <span class="message__time">${this.#getCurrentTime()}</span>
          </div>
            <p class="message__value">${message}</p>
        </div>`

        this.elements.messagesElement.insertAdjacentHTML('beforeend', messageHTML)
    }
}

const chatHandler = new ChatHandler()