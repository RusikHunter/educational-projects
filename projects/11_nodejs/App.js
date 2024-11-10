const greet = require('./greet')
greet("World")

const _ = require('lodash')

const arr = [1, 2, 3, 4]
console.log(_.shuffle(arr))

const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, Node.js!')
})

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000')
});