async function doubleAfterDelay(value) {
    return new Promise((resolve, reject) => {
        if (typeof value === 'number') {
            resolve(value * 2)
        } else {
            reject('Error! Value is not a number!')
        }
    })
}

console.log(1)
doubleAfterDelay(5)
    .then(result => {
        console.log(result);
    })
    .catch(result => {
        console.log(result)
    })
console.log(2)

class OperationTools {
    static async doubleArray(arr) {
        const promises = arr.map(value => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(value * 2)
                }, 1000)
            })
        })

        return Promise.all(promises)
    }
}

new OperationTools()

console.log(1)
OperationTools.doubleArray([1, 2, 3]).then(result => {
    result.forEach(value => {
        console.log(value)
    })
})
console.log(2)

class TaskError extends Error {
    constructor(error) {
        super(error)
        this.name = 'TaskError'
    }
}

function fetchUser(value) {
    return new Promise((resolve, reject) => {
        const random = Math.random()
        let result = null

        if (random > 0.5) {
            result = { id: value, name: 'Nikita' }

            resolve(result)
        } else {
            result = 'Error'

            reject(new Error(result))
        }
    })
}

function getName(user) {
    return user.name;
}

function run() {
    console.log('Start code...')

    fetchUser(91)
        .then((result) => {
            console.log(result)

            return (result)
        })
        .then((user) => {
            const userName = getName(user)

            console.log(userName)
        })
        .catch((error) => {
            console.log(error)
        })
}

run()

// 1. запросить все видео
// 2. запросить описание первого видео
// 3. в описании указан автор, нужно запросить информацию по нему
// 4. пытаемся получить шортсы автора

// callback hell

function fetchVideos(callback) {
    const videos = [1, 2, 3]

    callback(videos[0])
}

function fetchVideoDescription(id, callback) {
    const decription = 'Abc ' + id

    callback(decription)
}

function fetchAuthor(id, callback) {
    const author = 'Some author with ID ' + id

    callback(author)
}

function fetchShorts(data) {
    console.log(data)
}

function run() {
    fetchVideos((id) => {
        const newID = id

        console.log(newID)

        fetchVideoDescription(newID, (decription) => {
            const authorID = 901

            console.log(decription)

            fetchAuthor(authorID, (author) => {
                const shortsInfo = author + ' and his shorts... some data'

                console.log(author)

                fetchShorts(shortsInfo)
            })
        })
    })
}

// 1. запросить все видео
// 2. запросить описание первого видео
// 3. в описании указан автор, нужно запросить информацию по нему
// 4. пытаемся получить шортсы автора

function fetchVideo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const someDataFromServer = [1, 2, 3]

            console.log('Videos array is fetched')

            resolve(someDataFromServer[0])
        }, 1000)
    })
}

function fetchDescription(video) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const descriptionOfFirstMovie = 'to video ' + video

            console.log('Description of video is fetched')

            resolve(descriptionOfFirstMovie)
        }, 1000)
    })
}

function fetchAuthor(description) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const author = 'Description ' + description + ' has some info about author'

            console.log('Author is fetched')

            resolve(author)
        }, 3000)
    })
}

function fetchShorts(author) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const shorts = author + ', but this author has also some shorts...'

            console.log('Shorts is fetched')

            resolve(shorts)
        }, 1500)
    })
}

fetchVideo()
    .then((result) => {
        return fetchDescription(result)
    })
    .then((result) => {
        return fetchAuthor(result)
    })
    .then((result) => {
        return fetchShorts(result)
    })
    .then((result) => {
        console.log(result)
    })

const loadVideos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Videos loaded')

            const randomResult = Math.random()

            if (randomResult > 0.5) {
                resolve('Videos were successfully loaded')
            } else {
                reject(new Error('Something went wrong...'))
            }
        }, 1000)
    })
}

const loadShorts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Shorts loaded')

            const randomResult = Math.random()

            if (randomResult > 0.5) {
                resolve('Shorts were successfully loaded')
            } else {
                reject(new Error('Something went wrong...'))
            }
        }, 3000)
    })
}

Promise.allSettled([loadVideos(), loadShorts()])
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

async function getSomething() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello!')
        }, 3000)
    })
}

console.log(1)

const something = await getSomething()

console.log(something)

console.log(2)

class TaskQueue {
    taskQueue = []

    addTask(callback) {
        const task = callback()

        this.taskQueue.push(task)
    }

    start(maxCount = 1) {
        return new Promise(resolve => {
            setTimeout(() => {
                let tasksToDo = []

                for (let i = 0; i < maxCount; ++i) {
                    tasksToDo.push(this.taskQueue[i])
                }

                Promise.allSettled(tasksToDo)
                    .then(result => console.log(result))

                this.taskQueue.splice(0, maxCount)
            }, 3000)
        })
    }
}

const queue = new TaskQueue()

queue.addTask(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('task1 --->')

            resolve('Task1 done')
        }, 1000)
    })
})

queue.addTask(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('task2 --->')

            resolve('Task2 done')
        }, 1000)
    })
})

queue.addTask(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('task3 --->')

            resolve('Task3 done')
        }, 1000)
    })
})

queue.addTask(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('task4 --->')

            resolve('Task4 done')
        }, 1000)
    })
})

queue.addTask(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('task5 --->')

            resolve('Task5 done')
        }, 1000)
    })
})

queue.start(2)