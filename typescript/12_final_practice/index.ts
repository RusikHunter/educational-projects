// // easy

// // 1

// function combineInformation(text: string, value: number): string {
//     return text + value
// }

// console.log(combineInformation("abc", 123))

// // 2

// enum Role {
//     Admin = "admin",
//     User = "user",
//     Guest = "guest"
// }

// let user: Role = Role.Guest as Role

// if (user === Role.Admin) {
//     console.log("User - admin")
// } else if (user === Role.User) {
//     console.log("User - user")
// } else {
//     console.log("User - guest")
// }

// // 3

// type Fields = 'host' | 'port' | 'secure'

// const config: Readonly<Record<Fields, string | boolean>> = {
//     host: "123.456.789",
//     port: "9999",
//     secure: true,
// }

// // medium

// // 1

// type User = {
//     id: number,
//     name: string,
//     email: string,
//     password: string,
//     role: string
// }

// type UserToRegistration = Omit<User, 'id' | 'password'>

// type UserShowAccess = Pick<User, 'id' | 'role'>

// // 2

// function showType(value: string | number | boolean): void {
//     if (typeof value === 'string') {
//         console.log('Type of value - string')
//     } else if (typeof value === 'number') {
//         console.log('Type of value - number')
//     } else {
//         console.log('Type of value - boolean')
//     }
// }

// showType(true)

// hard

// 1

function getProperty<T extends object, K extends keyof T>(obj: T, key: string): T[K] {
    if (key in obj) {
        return obj[key as K]
    }
    throw new Error("Key not found")
}

interface User {
    name: string,
    age: number
}

const user_: User = {
    name: "alex",
    age: 123
}

const value = getProperty(user_, "name")
console.log(value)