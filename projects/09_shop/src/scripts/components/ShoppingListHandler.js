import Product from "./Product"

class ShoppingListHandler {
    constructor() {
        this.elements = []

        this.sortingType = 'nothing'

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

        // edit product form

        this.elements.editProductDialogElement = document.querySelector('[data-js-dialog-edit-product]')
        this.elements.editProductFormElement = document.querySelector('[data-js-form-edit-product]')
        this.elements.editProductFormCloseButtonElement = document.querySelector('[data-js-button-change-close]')
        this.elements.editProductFormIDElement = document.querySelector('[data-js-form-edit-id]')
        this.elements.editProductFormTitleElement = document.querySelector('[data-js-form-edit-title]')
        this.elements.editProductFormSubmitButtonElement = document.querySelector('[data-js-form-edit-submit]')
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

            this.#_renderProductsList()
        })

        this.elements.editProductFormCloseButtonElement.addEventListener('click', () => {
            this.elements.editProductDialogElement.removeAttribute('open')
        })

        this.elements.editProductFormSubmitButtonElement.addEventListener('click', (event) => {
            event.preventDefault()

            const formData = new FormData(this.elements.editProductFormElement)

            const product = JSON.parse(window.localStorage.getItem(this.elements.editProductDialogElement.getAttribute('data-js-dialog-edit-product')))

            const productProperties = []

            for (const [key, value] of formData.entries()) {
                if (product.hasOwnProperty(key)) {
                    if (value.trim() !== '') {
                        productProperties.push(value)
                    } else {
                        productProperties.push(product[key])
                    }
                }
            }

            const newProduct = new Product(product.id, productProperties[0], productProperties[1], productProperties[2], productProperties[3], productProperties[4])

            window.localStorage.setItem(product.id, JSON.stringify(newProduct))

            this.elements.editProductDialogElement.removeAttribute('open')

            this.#_renderProductsList()
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

            const product = new Product(ID, title, description, category, price, count)

            window.localStorage.setItem(ID, JSON.stringify(product)) // adding product to localStorage

            this.#_renderProductsList()
        } catch (error) {
            console.log(error)
        }
    }

    // method renders all product elements list (based on the sort type)

    #_renderProductsList() {
        // at first cleaning previous list of products
        this.#_clearProductsList()

        // rendering products ...

        switch (this.sortingType) {
            case 'nothing':
                console.log('nothing')
                const keys = Object.keys(window.localStorage).sort()

                for (const key of keys) {
                    const value = localStorage.getItem(key)

                    const product = JSON.parse(value)

                    this.elements.listElement.insertAdjacentHTML('beforeend', product.html)
                }
                break
            case 'category':
                const items = Object.keys(window.localStorage)
                    .map(key => {
                        const parsedObject = JSON.parse(window.localStorage.getItem(key))

                        return {
                            key: key,
                            category: parsedObject.category
                        }
                    })

                items.sort((a, b) => {
                    if (a.category < b.category) return -1
                    if (a.category > b.category) return 1
                    return 0
                })

                for (let i = 0; i < window.localStorage.length; ++i) {
                    const value = localStorage.getItem(items[i].key)

                    const product = JSON.parse(value)

                    this.elements.listElement.insertAdjacentHTML('beforeend', product.html)
                }
                break
            case 'purchased':
                const purchasedKeys = Object.keys(window.localStorage)
                    .map(key => {
                        return JSON.parse(window.localStorage.getItem(key))
                    }).sort()

                const purchasedProducts = purchasedKeys.filter(item => item.isPurchased === true)

                for (const product of purchasedProducts) {
                    this.elements.listElement.insertAdjacentHTML('beforeend', product.html)
                }
                break
            case 'notPurchased':
                const notPurchasedKeys = Object.keys(window.localStorage)
                    .map(key => {
                        return JSON.parse(window.localStorage.getItem(key))
                    }).sort()

                const notPurchasedProducts = notPurchasedKeys.filter(item => item.isPurchased === false)

                for (const product of notPurchasedProducts) {
                    this.elements.listElement.insertAdjacentHTML('beforeend', product.html)
                }
                break
        }

        // adding event listeners to all rendered remove-buttons
        const removeButtons = document.querySelectorAll('[data-js-button-remove]')
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-js-button-remove')

                window.localStorage.removeItem(id)

                this.#_renderProductsList()
            })
        })

        // add event listeners to all rendered edit-buttons

        const editButton = document.querySelectorAll('[data-js-button-edit]')
        editButton.forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-js-button-edit')

                this.elements.editProductDialogElement.setAttribute('open', '')

                const product = JSON.parse(window.localStorage.getItem(id))

                this.elements.editProductFormIDElement.textContent = `ID: ${product.id}`
                this.elements.editProductDialogElement.setAttribute('data-js-dialog-edit-product', product.id)
                this.elements.editProductFormTitleElement.textContent = product.title

                // this.#_renderProductsList()
            })
        })

        // adding event listeners to all rendered remove-buttons
        const checkboxes = document.querySelectorAll('[data-js-checkbox-is-purchased]')
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (event) => {
                const id = checkbox.getAttribute('data-js-checkbox-is-purchased')

                const product = JSON.parse(window.localStorage.getItem(id))
                console.log(product)
                product.isPurchased = !product.isPurchased

                window.localStorage.setItem(id, JSON.stringify(product))

                this.#_renderProductsList()
            })

            const updatedId = checkbox.getAttribute('data-js-checkbox-is-purchased')
            const updatedProduct = JSON.parse(window.localStorage.getItem(updatedId))

            checkbox.checked = updatedProduct?.isPurchased || false
        })
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