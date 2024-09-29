// async function doubleAfterDelay(value) {
//     return new Promise((resolve, reject) => {
//         if (typeof value === 'number') {
//             resolve(value * 2)
//         } else {
//             reject('Error! Value is not a number!')
//         }
//     })
// }

// console.log(1)
// doubleAfterDelay(5)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(result => {
//         console.log(result)
//     })
// console.log(2)

// class OperationTools {
//     static async doubleArray(arr) {
//         const promises = arr.map(value => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     resolve(value * 2)
//                 }, 1000)
//             })
//         })

//         return Promise.all(promises)
//     }
// }

// new OperationTools()

// console.log(1)
// OperationTools.doubleArray([1, 2, 3]).then(result => {
//     result.forEach(value => {
//         console.log(value)
//     })
// })
// console.log(2)

class TaskError extends Error {
    constructor(error) {
        super(error)
        this.name = 'TaskError'
    }
}

class TaskQueue {
    static queue = []

    static async addTask(task) {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    if (typeof task !== 'string') {
                        throw new TaskError('Type of task is not a task')
                    }

                    resolve(this.queue.push(task))
                }, 1000)
            } catch (error) {
                reject(error)
            }
        })
    }

    static async logQueue() {
        return new Promise(resolve => {
            this.queue.forEach(element => {
                console.log('abc')
                console.log(element)
            });

            resolve('Ok')
        })
    }
}

new TaskQueue()

console.log(1)
TaskQueue.addTask('Some task...')
TaskQueue.logQueue().then(result => {
    console.log(result)
})
console.log(2)