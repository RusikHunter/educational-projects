// debugger

const orders = [] // empty array of orders

const isNameCorrect = (value) => {
    return typeof value === 'string' && value.trim().length !== 0;
}

const isCountCorrect = (value) => {
    return typeof value === 'number' && Number.isFinite(value) && Number.isInteger(value) && value > 0;
}

const isPriceCorrect = (value) => {
    return typeof value === 'number' && Number.isFinite(value) && !Number.isInteger(value) && value > 0;
}

// add an order

const addOrder = (p, q, prc) => {
    if (!isNameCorrect(p) || (!isCountCorrect(q)) || (!isPriceCorrect(prc))) {
        console.log('Incorrect product')

        return
    }

    orders.push({
        id: orders.length,
        product: p.trim(),
        quantity: q,
        price: Number(prc.toFixed(2))
    })

    console.log('Order ' + (orders.length - 1) + ' added')
}

// remove an order

const removeOrder = (id) => {
    const removableOrderID = orders.findIndex((order) => order.id === id)

    if (removableOrderID !== -1) {
        orders.splice(removableOrderID, 1)

        console.log('Order ' + removableOrderID + ' removed')

        return
    }

    return console.log('Incorrect ID')
}

// update order quantity

const updateOrderQuantity = (id, newQuantity) => {
    const changingOrderID = orders.findIndex((order) => order.id === id)

    if (changingOrderID !== -1 && isCountCorrect(newQuantity)) {
        orders[changingOrderID].quantity = newQuantity;

        console.log('Quantity of order ' + changingOrderID + ' changed')

        return
    }

    return console.log('Incorrect ID or quantity')
}

// calculate total price

const calculateTotalPrice = () => {
    let totalPrice = orders.reduce((sum, order) => { return sum + (order.price * order.quantity) }, 0)

    totalPrice = Number(totalPrice.toFixed(2))

    console.log('Price: ' + totalPrice + '$')
}

addOrder('Cheese', 3, 14.88)
addOrder('Banana', 3, 19.01)
addOrder('Apple', 1, 0.31)

removeOrder(1)

// debugger
updateOrderQuantity(0, 19)

calculateTotalPrice()

// debugger
console.log(orders)
