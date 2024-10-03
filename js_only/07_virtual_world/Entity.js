import { Tools } from "./Tools.js"
import { World } from "./World.js"

export class Entity {
    constructor(entity) {
        const { id, name, model, lifeCycle, hp, world } = entity

        this.id = id
        this.name = name
        this.model = model
        this.lifeCycle = lifeCycle * 6000
        this.hp = hp

        this.world = world
        this.currentValueOfEntityYears = 0
        this.lifeInterval = null  // для хранения setInterval
        this.lifeTimeout = null   // для хранения setTimeout
    }

    async startEntityLife() {
        return new Promise(resolve => {
            this.lifeInterval = setInterval(() => {
                this.currentValueOfEntityYears++
            }, this.world.LENGTH_OF_ONE_YEAR) // 6000

            this.lifeTimeout = setTimeout(() => {
                this.stopEntityLife()

                this.world.removeEntity(this.id)
            }, this.lifeCycle)
        })
    }

    stopEntityLife() {
        if (this.lifeInterval) {
            clearInterval(this.lifeInterval)
        }
        if (this.lifeTimeout) {
            clearTimeout(this.lifeTimeout)
        }

        console.log('Entity ' + this.name + ' died :(')
    }

    doSomething() {
        console.log(this.name + ' does something....')
    }

    eating() {
        this.hp < 20 ? this.hp += 10 : this.hp += 5

        console.log(this.name + ' eats something... He is already healthy. HP: ' + this.hp)
    }

    sleeping() {
        this.hp += 20

        console.log(this.name + ' sleeps... He is already very healthy. HP: ' + this.hp)
    }

    usingDrugs() {
        this.hp -= 50

        console.log(this.name + ' use drugs... HP: ' + this.hp)

        if (this.hp <= 0) {
            this.stopEntityLife()
            this.world.removeEntity(this.id)
        }
    }
}