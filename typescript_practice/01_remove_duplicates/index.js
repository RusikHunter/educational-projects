function removeDuplicatesFromArrayy(arr) {
    var arrayOfUniqueValues = [];
    arr.forEach(function (item) {
        if (!arrayOfUniqueValues.includes(item)) {
            arrayOfUniqueValues.push(item);
        }
    });
    return arrayOfUniqueValues;
}
var arrayy = [1, 2, 2, 3, 4, 4, 5, 5, 5, 9, 0, 0, 9, 1001, 100, 1001]; // 1 2 3 4 5
console.log(removeDuplicatesFromArrayy(arrayy));
