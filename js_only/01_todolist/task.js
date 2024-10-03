// const isEven = (number) => {
//     if (number % 2 === 0) return 'Even'

//     return 'Odd'
// }

// console.log(isEven(3))

// const string1 = isEven(4)

// console.log(string1)

// const getPersonInfo = (obj) => {
//     if (typeof obj !== 'object') return 'Not object'

//     return "Name:" + obj.name + "Age:" + obj.age + "Profession:" + obj.profession
// }

// const pernos = {
//     name: "Nikita",
//     age: 18,
//     profession: 'Programmer'
// }

// console.log(getPersonInfo(pernos)) // Name:NikitaAge:18Profession:Programmer


// console.log(getPersonInfo(1)) // Not object

// const updateCarYear = (car, y) => {
//     const updatedYear = y

//     if (typeof updatedYear !== 'number') {
//         console.log('Incorrect value')

//         return
//     }

//     car.year = updatedYear
// }

// const car1 = {
//     brand: 'Toyota',
//     model: 'Hilux',
//     year: 2007
// }

// console.log(car1.year)
// updateCarYear(car1)
// console.log(car1.year)

// const calculateTotalPrice = (sC) => {
//     let totalPrice = 0

//     const keys = Object.keys(sC) // get array with object keys

//     for (let i = 0; i < keys.length; ++i) {
//         const key = keys[i]

//         totalPrice += sC[key]
//     }

//     return totalPrice
// }

// const shoppingCart = {
//     apple: 50,
//     banana: 30,
//     orange: 40
// }

// console.log(calculateTotalPrice(shoppingCart))

const taskList = {
    task1: {
        id: 0,
        title: 'task 1',
        description: 'lorem ipsum 1',
        isCompleted: false
    },
    task2: {
        id: 1,
        title: 'task 2',
        description: 'lorem ipsum 2',
        isCompleted: false
    },
    task3: {
        id: 2,
        title: 'task 3',
        description: 'lorem ipsum 3',
        isCompleted: true
    }
}

const addTask = (t, d) => {
    const values = Object.values(taskList) // get array with object values (tasks)

    let IDOfNewTask = values.length // set last ID of keys | 3

    // check if there is empty space between some id
    for (let i = 0; i < values.length; ++i) {
        const value = i // 0

        const nextValue = i + 1 // 1

        if (typeof values[nextValue] !== 'undefined' && values[value].id - values[nextValue].id !== -1) {
            console.log('STOP' + i)
            IDOfNewTask = values[value].id + 1

            break
        }
    }

    taskList['task' + Number(IDOfNewTask + 1)] = {
        id: IDOfNewTask,
        title: t,
        description: d,
        isCompleted: false
    }
}

const removeTask = (id) => {
    const keys = Object.keys(taskList) // get array with object keys (tasks)
    const values = Object.values(taskList) // get array with object values (tasks)

    for (let i = 0; i < keys.length; ++i) {
        if (id === values[i].id) {
            delete taskList[keys[i]]

            return
        }
    }
}

const markTaskCompleted = (id) => {
    const keys = Object.keys(taskList) // get array with object keys (tasks)
    const values = Object.values(taskList) // get array with object values (tasks)

    for (let i = 0; i < keys.length; ++i) {
        if (id === values[i].id) {
            taskList[keys[i]].isCompleted = true

            return
        }
    }
}

const getTasksByStatus = (isC) => {
    const keys = Object.keys(taskList) // get array with object keys (tasks)
    const values = Object.values(taskList) // get array with object values (tasks)

    let arrOfSelectedTasks = []

    for (let i = 0; i < keys.length; ++i) {
        if (values[i].isCompleted === isC) {
            arrOfSelectedTasks.push(taskList[keys[i]])
        }
    }

    return arrOfSelectedTasks
}

const formatTasks = () => {
    const values = Object.values(taskList) // get array with object values (tasks)

    let formattedString = ''

    for (let i = 0; i < values.length; ++i) {
        formattedString += 'ID: ' + values[i].id + '; Title: ' + values[i].title + '; Description: ' + values[i].description + '; Completed: ' + values[i].isCompleted + ';\n'
    }

    return formattedString
}

console.log(taskList)

const string = formatTasks()
console.log(string)
