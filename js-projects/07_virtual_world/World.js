import { Tools } from "./Tools.js"
import { Entity } from "./Entity.js"

export class World {
    // const values
    NAME = 'Virtual World'
    LENGTH_OF_ONE_YEAR = 6000 // 6000ms
    MAX_LENGTH_OF_WORLD_LIFE = this.LENGTH_OF_ONE_YEAR * 100 // 600000ms = 600s = 10m

    // changable values
    listOfEntities = []
    currentValueOfWorldYears = 0
    IDOfNextEntity = -1
    stateOfWorld = 'default'
    lifeInterval = null
    lifeTimeout = null

    // функция, которая начинает жизнь мира, раз в минуту проходит один виртуальный год
    async startWorldLife() {
        return new Promise(resolve => {
            console.log('Virtual World started!')

            this.lifeInterval = setInterval(() => {
                this.currentValueOfWorldYears++

                console.log('One year has passed, now our world ' + this.currentValueOfWorldYears + ' years old')
            }, this.LENGTH_OF_ONE_YEAR)

            // через 100 минут (т.е. через 100 виртуальных лет) прекратить таймер
            this.lifeTimeout = setTimeout(() => {
                this.stopWorldLife()
            }, this.MAX_LENGTH_OF_WORLD_LIFE)
        })
    }

    async stopWorldLife() {
        if (this.lifeInterval) {
            clearInterval(this.lifeInterval)
        }
        if (this.lifeTimeout) {
            clearTimeout(this.lifeTimeout)
        }

        console.log('The life cycle of the world is complete. The world is no more.')

        const worldResult = {
            id: Tools.IDOfCurrentWorld++,
            title: this.NAME,
            livedYears: this.currentValueOfWorldYears
        }

        Tools.setWorldToCollection(worldResult)
    }

    async makeCrysis() {
        return new Promise(resolve => {
            this.stateOfWorld = 'crysis'

            this.listOfEntities.forEach(entity => {
                entity.hp -= 10;

                if (entity.hp <= 0) {
                    entity.stopEntityLife().then(result => console.log(result))  // Остановить таймеры жизненного цикла
                    this.removeEntity(entity.id)
                }
            })

            resolve('Crysis came... Everyone is f***ed')
        })
    }

    async makeProsperity() {
        return new Promise(resolve => {
            resolve('Prosperity came... Everyone is happy')

            this.stateOfWorld = 'prosperity'

            this.listOfEntities.forEach(entity => {
                entity.hp += 10;
            })
        })
    }

    async createEntity(n, m, lC, hp) {
        return new Promise((resolve, reject) => {
            if (Tools.isStringCorrect(n) && Tools.isStringCorrect(m) && Tools.isNumberCorrect(lC) && Tools.isNumberCorrect(hp)) {
                let newEntity = {
                    id: ++this.IDOfNextEntity,
                    name: n,
                    model: m,
                    lifeCycle: lC,
                    hp: hp,
                    world: this
                }

                const entityToAdding = new Entity(newEntity)

                this.listOfEntities.push(entityToAdding)

                this.listOfEntities[this.listOfEntities.length - 1].startEntityLife().then(result => console.log(result))

                resolve('Entity ' + this.IDOfNextEntity + ' is created! Name: ' + n + '; Model: ' + m + '; Life cycle: ' + lC + '; HP: ' + hp + ';')
            } else {
                reject('The entity could not be created because God messed something up.')
            }
        })
    }

    async removeEntity(id) {
        return new Promise(resolve => {
            try {
                const entityToRemove = this.listOfEntities.findIndex(entity => entity.id === id)

                if (entityToRemove === 'undefined') {
                    throw new Error('Entity cannot be removed because not found')
                }

                this.listOfEntities.splice(entityToRemove, 1)

                if (this.isWorldEmpty()) {
                    this.stopWorldLife()
                }
            } catch (error) {
                console.log(error)
            }
        })
    }

    logInfo() {
        console.log('Info:\n')
        this.listOfEntities.forEach(entity => {
            console.log('Entity ' + entity.id + '; Name: ' + entity.name + '; Model: ' + entity.model + '; HP: ' + entity.hp)
        })
    }

    isWorldEmpty() {
        return this.listOfEntities.length === 0
    }
}