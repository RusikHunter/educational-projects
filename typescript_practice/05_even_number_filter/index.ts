function evenNumberFilter(array) {
    const arrayWithEvenNumbers = array.filter(item => item % 2 === 0)

    return arrayWithEvenNumbers
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(evenNumberFilter(array))