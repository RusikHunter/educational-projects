const array = [23, 1, 9, 87, 16, 32, 8, 17, 17, 8]

function sort(arr) {
    const arrToSorting = [...arr] // [1, 23, 9, 87, 16, 32, 8, 17, 17, 8]
    let elementsToCheck = arrToSorting.length - 1 // 9

    for (let i = 0; i < arrToSorting.length - 2; ++i) { // 8
        for (let y = 0; y < elementsToCheck; ++y) {
            if (arrToSorting[y] > arrToSorting[y + 1]) {
                let temp = arrToSorting[y]

                arrToSorting[y] = arrToSorting[y + 1]

                arrToSorting[y + 1] = temp
            }
        }

        elementsToCheck--
    }

    return arrToSorting
}

const sortedArray = sort(array)

console.log(array)
console.log(sortedArray)
