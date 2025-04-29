// 🔹 Что такое Generics ?
//     Generics(обобщённые типы) позволяют писать функции, классы и интерфейсы, которые работают с разными типами, не теряя информацию о них.

// 📦 Это как «шаблон» типа, который будет подставлен позже при использовании.

// без generics

// function identity(value: any): any {
//     return value
// }

function identity<T>(value: T): T {
    return value
}

let result = identity("test")

interface ApiResponse<T> {
    data: T
    success: boolean
}

const userResponse: ApiResponse<{ name: string }> = {
    data: { name: "Alice" },
    success: true
}

class Box<T> {
    content: T
    constructor(value: T) {
        this.content = value
    }
}

const numberBox = new Box<number>(123)
const stringBox = new Box("hello")

function getLength<T extends { length: number }>(item: T): number {
    return item.length
}

getLength("hello")        // OK
getLength([1, 2, 3])      // OK
// getLength(123) // ❌ Ошибка: у number нет length




function pair<K, V>(key: K, value: V): { key: K; value: V } {
    return { key, value }
}

const user = pair("id", 123) // { key: string; value: number }

type Nullable<T> = T | null

const name1: Nullable<string> = "Alice"
const age: Nullable<number> = null

function pickProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

const user123 = { id: 1, name: "Bob" };
const userName = pickProperty(user123, "name") // string

// practice

function firstElement<T>(arr: T[]): T | undefined {
    return arr[0]
}