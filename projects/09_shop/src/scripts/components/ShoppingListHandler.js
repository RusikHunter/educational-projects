import Product from "./Product"

class ShoppingListHandler {
    constructor() {
        this.elements = []

        this.sortingTypes = {
            nothing: 'nothing',
            category: 'category',
            purchased: 'purchased',
            notPurchased: 'not_purchased'
        }

        this.sortingType = this.sortingTypes.nothing
        console.log(this.sortingType)

        this.#_getElements()
        this.#_setEvents()
        this.#_renderProductsList()
    }

    // methods of constructor

    #_getElements() {
        // add product form
        this.elements.addFormElement = document.querySelector('[data-js-form-add]')
        this.elements.addFormSubmitElement = document.querySelector('[data-js-form-add-submit]')

        // list of products

        this.elements.listElement = document.querySelector('[data-js-list]')

        // button clearing list and storage

        this.elements.clearButtonElement = document.querySelector('[data-js-button-clear]')

        // select sort type

        this.elements.sortingTypeSelectElement = document.querySelector('[data-js-select-sort-type]')
    }

    #_setEvents() {
        // add product
        this.elements.addFormSubmitElement.addEventListener('click', (event) => {
            event.preventDefault()

            this.#_addProduct()
        })

        // clear storage and list
        this.elements.clearButtonElement.addEventListener('click', () => {
            window.localStorage.clear()

            this.#_clearProductsList()
        })

        // change sort type
        this.elements.sortingTypeSelectElement.addEventListener('change', (event) => {
            const sortingType = event.target.value

            this.sortingType = sortingType

            console.log(this.sortingType)
        })
    }

    // basic methods

    //method adds new product to localstorage and to product elements list
    async #_addProduct() {
        const formOfAddingProduct = new FormData(this.elements.addFormElement)

        // product values
        try {
            const ID = Date.now()
            const title = formOfAddingProduct.get('title')
            const description = formOfAddingProduct.get('description')
            const category = formOfAddingProduct.get('category')

            const response = await fetch(`https://dummyjson.com/products/${Math.floor(Math.random() * 100)}`)
            const price = (await response.json()).price

            const count = formOfAddingProduct.get('count')

            if (!title || !description || !count) {
                throw new Error(`Cant add product without full data`)
            }

            // console.log(price)
            // console.log(title, description, category, price, count, totalPrice)

            const product = new Product(ID, title, description, category, price, count)

            console.log(product) // temp

            window.localStorage.setItem(ID, JSON.stringify(product)) // adding product to localStorage

            this.#_renderProductsList()
        } catch (error) {
            console.log(error)
        }
    }

    // method renders all product elements list (based on the sort type)

    #_renderProductsList() {
        this.#_clearProductsList()

        const keys = Object.keys(window.localStorage).sort()

        for (const key of keys) {
            const value = localStorage.getItem(key)

            const product = JSON.parse(value)

            this.elements.listElement.insertAdjacentHTML('beforeend', product.html)
        }
    }

    // method removes all product elements list

    #_clearProductsList() {
        const products = document.querySelectorAll('[data-js-product]')
        products.forEach(product => {
            this.elements.listElement.removeChild(product)
        })
    }
}

export default ShoppingListHandler