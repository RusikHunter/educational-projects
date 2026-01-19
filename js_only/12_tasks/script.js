// function sumArray(arr) {
//     const result = arr.reduce((acc, number) => {
//         return acc += number
//     }, 0)

//     return result
// }

// const array1 = [1, 35, 89, 16, 7, 80]

// console.log(sumArray(array1))

// --------------------------------------------------

function countChars(string) {
    const obj = {}

    for (const char of string) {
        const valueToAdding = obj[char] !== undefined ? obj[char] : 0

        obj[char] = valueToAdding + 1
    }

    return obj
}

console.log(countChars('aabbbcdeeeee'))