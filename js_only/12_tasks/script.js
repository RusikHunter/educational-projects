function sumArray(arr) {
    const result = arr.reduce((acc, number) => {
        return acc += number
    }, 0)

    return result
}

const array1 = [1, 35, 89, 16, 7, 80]

console.log(sumArray(array1))

// --------------------------------------------------

function countChars(string) {
    const obj = {}

    for (const char of string) {
        console.log(char)

        obj[char] = null
    }

    string.split("").forEach(char => {
        obj[char]++
    })
}

countChars('aabbbcdeeeee')