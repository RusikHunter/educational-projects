// interface User {
//     id: number
//     name: string
//     email: string
//     isAdmin: boolean
// }

// // 1. Pick<Type, Keys>
// // Что делает: выбирает некоторые поля из типа.

// type UserPreview = Pick<User, "id" | "name">

// const user: UserPreview = { id: 123, name: "alex" }

// // 2. Omit<Type, Keys>
// // Что делает: создаёт тип, исключив некоторые поля.

// type UserWithoutEmail = Omit<User, "email">

// const user2: UserWithoutEmail = { id: 123, name: "alex", isAdmin: true }

// // 3. Record<Keys, Type>
// // Что делает: создаёт тип объекта, где ключи и значения заранее определены.

// type Role = "admin" | "user" | "guest"

// type RolePermissions = Record<Role, boolean>

// const roles: RolePermissions = {
//     admin: true,
//     user: false,
//     guest: false
// }

// // 4. Exclude<UnionType, ExcludedMembers>
// // Что делает: удаляет указанные члены из объединения (union).

// type Status = "active" | "inactive" | "pending"

// type FinalStatus = Exclude<Status, "pending">

// const status123: FinalStatus = "active"

// // 5. Readonly<Type>
// // Что делает: делает все поля объекта только для чтения (readonly).

// type ReadonlyUser = Readonly<User>

interface User {
    id: number
    name: string
    email: string
    isAdmin: boolean
}

type UserPreview = Readonly<Pick<User, "id" | "name">>

const user: UserPreview = {
    id: 123,
    name: "alex"
}