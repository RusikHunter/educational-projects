// Пример: без enum

const ADMIN = "ADMIN"
const USER = "USER"
const GUEST = "GUEST"

function checkRole(role: string) {
    if (role === ADMIN) {
        // ...
    }
}

// То же с enum:

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

function checkRoleWithEnum(role: Role) {
    if (role === Role.Admin) {
        // Всё строго типизировано!
    }
}

enum Status {
    Pending,  // 0
    InProgress, // 1
    Done  // 2
}

let s: Status = Status.InProgress // 1

enum Status2 {
    Pending = 1,
    InProgress,  // 2
    Done         // 3
}

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let c: Color = Color.Green // "GREEN"

// 3. Гетерогенные enum (смешанные типы) — ❌ не рекомендуются

enum Weird {
    Yes = "YES",
    No = 0
}

// 📛 Такие enum возможны, но читаются хуже, поэтому старайся избегать.


// Обратное отображение (только у числовых enum)

enum Direction {
    Up,
    Down
}

console.log(Direction.Up)     // 0
console.log(Direction[0])     // "Up" — обратное отображение

// 📌 Это не работает для строковых enum!



// functions

enum LogLevel {
    Info,
    Warning,
    Error
}

function log(message: string, level: LogLevel) {
    if (level === LogLevel.Error) {
        console.error(message)
    } else if (level === LogLevel.Warning) {
        console.warn(message)
    } else {
        console.log(message)
    }
}

log("Something went wrong!", LogLevel.Warning)


const enum Direction2 {
    Up,
    Down,
    Left,
    Right
}

let move = Direction.Up

// enum vs union types
// Иногда можно заменить enum на union:

type Role123 = "admin" | "user" | "guest"

// ✅ Преимущества union-типов:

// ✅ меньше кода в скомпилированном JS

// ✅ поддержка автоподстановки строк в IDE

// практика

enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled
}

function isFinalStatus(status: OrderStatus): boolean {
    return status === OrderStatus.Delivered || status === OrderStatus.Cancelled
}