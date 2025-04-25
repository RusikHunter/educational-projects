function greet(name) {
    return "Hello, ".concat(name);
}
var message = greet("Alice");
function logMessage(message) {
    console.log(message);
}
// необязательный параметр ?:
function greet2(name) {
    return name ? "Hello, ".concat(name) : "Hello!";
}
console.log(greet2("Zeljko Raznatovic"));
console.log(greet2());
