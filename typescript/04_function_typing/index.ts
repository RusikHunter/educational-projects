// function greet(name: string): string {
//     return `Hello, ${name}`
// }

// let message = greet("Alice")

// function logMessage(message: string): void {
//     console.log(message)
// }

// // необязательный параметр ?:

// function greet2(name?: string): string {
//     return name ? `Hello, ${name}` : "Hello!";
// }

// console.log(greet2("Zeljko Raznatovic"))
// console.log(greet2())

// function greet3(name: string = "stranger"): string {
//     return `Hello, ${name}`;
// }

// function sum(...numbers: number[]): number {
//     return numbers.reduce((acc, n) => acc + n, 0)
// }

// sum(1, 2, 3, 4)

// let multiply: (a: number, b: number) => number

// multiply = function (x, y) {
//     return x * y
// }

// type GreetFunction = (name: string) => string

// const greet4: GreetFunction = (name) => `Hi, ${name}`

// const calculator: {
//     add: (a: number, b: number) => number
//     subtract: (a: number, b: number) => number
// } = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b,
// }

// interface MathOps {
//     (a: number, b: number): number
// }

// const divide: MathOps = (x, y) => x / y

// // never используется для функций, которые никогда не завершаются нормально

// function throwError(message: string): never {
//     throw new Error(message)
// }

// function infiniteLoop(): never {
//     while (true) { }
// }

// // Можно задать несколько сигнатур функции, а реализацию — одну

// function reverse(x: string): string
// function reverse(x: number): number
// function reverse(x: string | number): string | number {
//     if (typeof x === "string") {
//         return x.split("").reverse().join("")
//     }
//     return Number(x.toString().split("").reverse().join(""))
// }

// reverse("hello")
// reverse(12345)

function formatUser(name: string, age: number): string {
    return `User ${name} is ${age} y.o.`
}