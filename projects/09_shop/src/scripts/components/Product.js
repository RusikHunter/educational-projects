class Product {
    constructor(ID, title, description, category, price, count) {
        this.id = ID,
            this.title = title,
            this.description = description,
            this.category = category,
            this.price = price,
            this.count = count,
            this.totalPrice = price * count,
            this.isPurchased = false

        this.html = `<div class="shop__product product" data-js-product>
        <span class="product__id">ID: ${this.id}</span>
        <h6 class="product__title">${this.title}</h6>
        <p class="product__description">Description: ${this.description}</p>
        <span class="product__category">Category: ${this.category}</span>

        <span class="product__price">Price: ${this.price}$</span>
        <span class="product__count">Count: ${this.count}</span>
        <span class="product__price--total">Total price: ${this.totalPrice}$</span>

        <div class="product__wrap--is-purchased">
            <label for="product123">Purchased:</label>
            <input type="checkbox" data-js-checkbox-is-purchased="${this.id}"
                class="product__checkbox--is-purchased">
        </div>
        <div class="product__wrap--buttons">
            <button class="product__button--edit" data-js-button-edit="${this.id}">Edit product</button>
            <button class="product__button--remove" data-js-button-remove="${this.id}">Remove product</button>
        </div>
        </div>`
    }

    #_getElements() {

    }

    #_setEvents() {

    }
}

export default Product