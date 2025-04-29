// Пример: без enum
var ADMIN = "ADMIN";
var USER = "USER";
var GUEST = "GUEST";
function checkRole(role) {
    if (role === ADMIN) {
        // ...
    }
}
// То же с enum:
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
function checkRoleWithEnum(role) {
    if (role === Role.Admin) {
        // Всё строго типизировано!
    }
}
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done"; // 2
})(Status || (Status = {}));
var s = Status.InProgress; // 1
var Status2;
(function (Status2) {
    Status2[Status2["Pending"] = 1] = "Pending";
    Status2[Status2["InProgress"] = 2] = "InProgress";
    Status2[Status2["Done"] = 3] = "Done"; // 3
})(Status2 || (Status2 = {}));
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var c = Color.Green; // "GREEN"
// 3. Гетерогенные enum (смешанные типы) — ❌ не рекомендуются
var Weird;
(function (Weird) {
    Weird["Yes"] = "YES";
    Weird[Weird["No"] = 0] = "No";
})(Weird || (Weird = {}));
// 📛 Такие enum возможны, но читаются хуже, поэтому старайся избегать.
// Обратное отображение (только у числовых enum)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
console.log(Direction[0]); // "Up" — обратное отображение
// 📌 Это не работает для строковых enum!
// functions
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 0] = "Info";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Error"] = 2] = "Error";
})(LogLevel || (LogLevel = {}));
function log(message, level) {
    if (level === LogLevel.Error) {
        console.error(message);
    }
    else if (level === LogLevel.Warning) {
        console.warn(message);
    }
    else {
        console.log(message);
    }
}
log("Something went wrong!", LogLevel.Warning);
