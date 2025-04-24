// let message: string = "Hello, TypeScript!"
// console.log(message)

// let age: number = 42
// console.log(age)

// let isGood: boolean = true
// console.log(isGood)

// let nullValue: null = null
// console.log(nullValue)

// let undefinedValue: undefined = undefined
// console.log(undefinedValue)

// let randomValue: any = "abc"
// console.log(randomValue)
// randomValue = 123
// console.log(randomValue)

// function logMessage(message: string): void {
//     console.log(message)
// }

// logMessage("Function result")





// let person: object = { name: "dmfshove", age: 19 }
// console.log(person)

// interface Person {
//     name: string,
//     age: number
// }

// let dmfshove: Person = { name: "dmfshove", age: 19 }
// console.log(dmfshove)

// type PersonType = {
//     name: string,
//     age: number
// }

// let dmfshove2: PersonType = { name: "I am", age: 1488 }
// console.log(dmfshove2)

// let numbers: number[] = [1, 2, 3, 4, 5]
// console.log(numbers)

// let strings: string[] = ["a", "b", "c"]
// console.log(strings)

// let numbers2: Array<string> = ["suka", "blyat", "idi", "nahuy"]
// console.log(numbers2)

// let tuple: [string, number] = ["dmfshove", 19]
// console.log(tuple)

// let value: string | number = "Hello, world!"
// console.log(value)
// value = 1941
// console.log(value)





// function add(a: number, b: number): number {
//     return a + b
// }

// console.log(add(1, 2))

// function logMessage2(message: string, message2: string): void {
//     console.log(message + message2)
// }

// logMessage2("Hello, ", "world!")





// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let move: Direction = Direction.Up

// console.log(move)

// enum Status {
//     Active = 1,
//     Inactive = 2,
//     Pending = 3
// }

// let status123: Status = Status.Pending
// console.log(status123)





class PersonWrap {
    name: string
    age: number
    isActive: boolean

    constructor(name: string, age: number, isActive: boolean) {
        this.name = name
        this.age = age
        this.isActive = isActive
    }

    greet(): void {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} y.o.`, this.isActive)
    }
}

const abdullah = new PersonWrap("Abdullah", 19, true)
abdullah.greet()