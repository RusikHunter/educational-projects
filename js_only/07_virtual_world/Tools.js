import { World } from "./World.js"
import { Entity } from "./Entity.js"

export class Tools {
    static IDOfCurrentWorld = 0
    static worldCollection = new Map()

    static isStringCorrect(value) {
        return typeof value === 'string' && value.trim().length !== 0
    }

    static isNumberCorrect(value) {
        return typeof value === 'number' && Number.isFinite(value) && Number.isInteger(value) && value > 0 && value <= 100;
    }

    static setWorldToCollection(object) {
        const objectToSetting = JSON.stringify(object)

        this.worldCollection.set(objectToSetting, `World ${this.IDOfCurrentWorld - 1}`)

        this.showWorldCollection()
    }

    static showWorldCollection() {
        this.worldCollection.forEach((key, value) => {
            console.log(key + ' ' + value)
        })
    }
}