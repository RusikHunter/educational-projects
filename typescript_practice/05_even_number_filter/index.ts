function evenNumberFilter(array: number[]): number[] {
    const arrayWithEvenNumbers: number[] = array.filter(item => item % 2 === 0)

    return arrayWithEvenNumbers
}

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(evenNumberFilter(array))