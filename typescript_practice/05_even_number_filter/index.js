function evenNumberFilter(array) {
    var arrayWithEvenNumbers = array.filter(function (item) { return item % 2 === 0; });
    return arrayWithEvenNumbers;
}
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenNumberFilter(array));
