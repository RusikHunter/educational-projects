function evenNumberFilter(array: number[]): number[] {
    const evenNumbers: number[] = array.filter(item => item % 2 === 0)

    return evenNumbers
}

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(evenNumberFilter(array))