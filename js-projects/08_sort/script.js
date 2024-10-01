const array = [1, 2, 21, 15, 5, 6, 8, 17, 16, 20]

function sort(arr) {
    const arrToSorting = [...arr] // [1, 23, 9, 87, 16, 32, 8, 17, 17, 8]
    let elementsToCheck = arrToSorting.length - 1 // 9
    let swapped = false

    for (let i = 0; i < arrToSorting.length - 2; ++i) { // 8
        swapped = false

        for (let y = 0; y < elementsToCheck; ++y) {
            if (arrToSorting[y] > arrToSorting[y + 1]) {
                [arrToSorting[y], arrToSorting[y + 1]] = [arrToSorting[y + 1], arrToSorting[y]]

                swapped = true
            }
        }

        elementsToCheck--

        if (!swapped) break
    }

    return arrToSorting
}

const sortedArray = sort(array)

console.log(array)
console.log(sortedArray)
