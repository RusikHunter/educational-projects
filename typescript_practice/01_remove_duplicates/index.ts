function removeDuplicatesFromArray(arr: number[]): number[] {
    const arrayOfUniqueValues: number[] = []

    arr.forEach(item => {
        if (!arrayOfUniqueValues.includes(item)) {
            arrayOfUniqueValues.push(item)
        }
    })

    return arrayOfUniqueValues
}

const array: number[] = [1, 2, 2, 3, 4, 4, 5] // 1 2 3 4 5

console.log(removeDuplicatesFromArray(array))

