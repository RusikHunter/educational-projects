function countTotalItemss(cart) {
    var sum = cart.reduce(function (acc, item) { return acc + item.quantity; }, 0);
    return sum;
}
var cartt = [
    { id: 1, name: "Apple", quantity: 2 },
    { id: 2, name: "Orange", quantity: 4 },
    { id: 3, name: "Banana", quantity: 3 },
];
var resultt = countTotalItemss(cartt);
console.log(resultt);
