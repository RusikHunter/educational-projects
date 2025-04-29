// Type Guard — это функция или конструкция, которая помогает TypeScript понять,
// что переменная имеет конкретный тип в определённом контексте. Это позволяет
// безопасно использовать свойства и методы для переменных, чьи типы были сужены
// с помощью Type Guards.

function printLength(value: string | number) {
    if (typeof value === "string") {
        // Теперь TypeScript знает, что value — это строка
        console.log(value.length)
    } else {
        // Если не строка, значит value — это число
        console.log(value.toFixed(2))
    }
}

// В этом примере typeof — это типичный Type Guard

// 1. typeof - для примитивов

function printValue(value: string | number | boolean) {
    if (typeof value === "string") {
        console.log(`It's a string: ${value}`)
    } else if (typeof value === "number") {
        console.log(`It's a number: ${value}`)
    } else {
        console.log(`It's a boolean: ${value}`)
    }
}

// 2. instanceof (для объектов и классов)
// Для работы с объектами и классами используем instanceof:

class Animal {
    move() {
        console.log("Moving...")
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!")
    }
}

function makeSound(animal: Animal) {
    if (animal instanceof Dog) {
        animal.bark()  // Теперь TypeScript знает, что это Dog
    } else {
        animal.move()
    }
}

// 3. Пользовательские Type Guards (User-Defined Type Guards)

interface Dog {
    bark(): void
}

interface Cat {
    meow(): void
}

function isDog(animal: Dog | Cat): animal is Dog {
    return (animal as Dog).bark !== undefined
}

function makeSound123(animal: Dog | Cat) {
    if (isDog(animal)) {
        animal.bark() // animal точно Dog после isDog
    } else {
        animal.meow() // animal точно Cat после проверки
    }
}

// 4. in (для проверки свойств объекта)

interface Car {
    drive(): void
    fuel: number
}

interface Bike {
    pedal(): void
    fuel: number
}

function drive(vehicle: Car | Bike) {
    if ("drive" in vehicle) {
        vehicle.drive() // У vehicle есть метод drive — значит, это Car
    } else {
        vehicle.pedal() // Если нет — это Bike
    }
}

// in используется для проверки наличия свойств и методов в объекте.

// practice

function logMessage(value: string | number | boolean): void {
    if (typeof value === "string") {
        console.log("string")
    } else if (typeof value === "number") {
        console.log("number")
    } else {
        console.log("boolean")
    }
}