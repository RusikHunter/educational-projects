type CartItem = {
    id: number
    name: string
    quantity: number
}

function countTotalItems(cart: CartItem[]): number {
    const sum: number = cart.reduce((acc, item) => acc + item.quantity, 0)

    return sum
}

const cart: CartItem[] = [
    { id: 1, name: "Apple", quantity: 2 },
    { id: 2, name: "Orange", quantity: 4 },
    { id: 3, name: "Banana", quantity: 3 },
]

const result = countTotalItems(cart)

console.log(result)