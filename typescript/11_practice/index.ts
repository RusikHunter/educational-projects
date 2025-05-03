// 1

function identity<T>(value: T): T {
    return value
}

// console.log(typeof (identity("string")))





// 2

interface Repository<T> {
    values: T[],
    add: (value: T) => void,
    delete: (value: T) => void,
    update: (value: T) => void,
    getElementByID: (id: number) => T,
    logValues: () => void
}




const userRepository: Repository<string> = {
    values: [],
    add: function (value) {
        this.values.push(value)
    },
    delete: function (value) {
        if (this.values.length <= 0) return

        const indexToRemove = this.values.indexOf(value)
        if (indexToRemove === -1) {
            console.log("Value not found")
            return
        }

        this.values.splice(indexToRemove, 1)
    },
    update: function (value) {
        const updatedValues = this.values.map(valueToUpdate => valueToUpdate + value)

        this.values = updatedValues
    },
    getElementByID: function (id) {
        if (this.values[id] === undefined) {
            console.log("Value not found")
        }

        return this.values[id]
    },
    logValues: function () {
        console.log("Values: ", this.values)
    }
}

userRepository.logValues()
userRepository.add("123")
userRepository.add("456")
userRepository.add("789")
userRepository.logValues()
userRepository.delete("75464589")
userRepository.delete("789")
userRepository.logValues()
userRepository.update("abc")
userRepository.logValues()
console.log(userRepository.getElementByID(4))
console.log(userRepository.getElementByID(1))





// 3

type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object
    ? T[K] extends Function
    ? T[K]
    : DeepPartial<T[K]>
    : T[K]
}