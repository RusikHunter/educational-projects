// Приведение типов (type casting) в TypeScript — это процесс указания компилятору,
// что определённая переменная должна рассматриваться как другой тип.
// Это не изменение типа переменной во время выполнения, а лишь указание
// для компилятора, чтобы он "поверил" тебе, что переменная соответствует определённому типу.
// Приведение типов нужно для точного контроля типов, особенно в ситуациях, когда TypeScript
// не может сам вывести точный тип, или когда ты точно знаешь больше, чем компилятор.

// let input = document.getElementById("username") as HTMLInputElement

// let input2 = <HTMLInputElement>document.getElementById("username")

const input = document.querySelector("input") as HTMLInputElement
input.value = "Hello!"

let value: any = "TypeScript"
let strLength = (value as string).length

type Person = {
    name: string
    age: number
}

const obj = {
    name: "Alice",
    age: 30,
    extra: true
}

// TS не знает, что obj подходит — подсказываем:
const person = obj as Person

// function handle(value: string | number) {
//     if (typeof value === "string") {
//         console.log((value as string).toUpperCase())
//     } else {
//         console.log(value.toFixed(2))
//     }
// }

// let x = "123" as unknown as number // дважды: string → unknown → number






// ❌ Что нельзя делать
// TypeScript не делает автоматическую конвертацию значений, как JavaScript:

// let input123 = "123" as number // ❌ Ошибка! Нельзя преобразовать string → number напрямую
// Чтобы это сработало, нужно реально преобразовать значение:

let input123 = Number("123") // ✅


// practice

function setImage(element: HTMLElement, url: string): void {
    const image = element as HTMLImageElement
    image.src = url
}