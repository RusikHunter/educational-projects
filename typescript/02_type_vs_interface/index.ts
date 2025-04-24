// // type

// type Person = {
//     name: string
//     age: number
// }

// const person: Person = { name: "Alice", age: 25 }

// type StringOrNumber = string | number

// let value: StringOrNumber = "Hello"
// value = 42

// type Name = { name: string }
// type Age = { age: number }

// type Person = Name & Age

// let person: Person = { name: "Alice", age: 25 }

// type Greet = (name: string) => string

// const greet: Greet = (name) => `Hello, ${name}`

// console.log(greet("123"))





// interface

interface Person {
    name: string
    age: number
}

const person: Person = { name: "Bob", age: 30 }

interface Animal {
    name: string
}

interface Dog extends Animal {
    breed: string
}

const dog: Dog = { name: "Rex", breed: "German Shepherd" }

interface Car {
    make: string
    model: string
}

interface Car {
    year: number
    model: string
}

const myCar: Car = { make: "Toyota", model: "Camry", year: 2020 }