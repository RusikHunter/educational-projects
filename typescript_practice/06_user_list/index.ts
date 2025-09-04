interface User {
    id: number
    name: string
    age: number
}

type UserObject = {
    [id: number]: User
}

function createUserObject(users: User[]): UserObject {
    const userObject: UserObject = users.reduce((accumulator, user) => {
        accumulator[user.id] = user
        return accumulator
    }, {})

    return userObject
}

const users: User[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "Diana", age: 28 },
    { id: 5, name: "Ethan", age: 35 },
]

console.log(createUserObject(users))