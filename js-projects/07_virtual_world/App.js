class Tools {
    static isStringCorrect(value) {
        return typeof value === 'string' && value.trim().length !== 0
    }

    static isNumberCorrect(value) {
        return typeof value === 'number' && Number.isFinite(value) && Number.isInteger(value) && value > 0 && value <= 100;
    }
}

class World {
    // const values
    NAME = 'Virtual World'
    LENGTH_OF_ONE_YEAR = 6000 // 6000ms
    MAX_LENGTH_OF_WORLD_LIFE = 600000 // 600000ms = 600s = 10m

    // changable values
    listOfEntities = []
    currentValueOfWorldYears = 0
    IDOfNextEntity = -1
    stateOfWorld = 'default'

    // функция, которая начинает жизнь мира, раз в минуту проходит один виртуальный год
    startWorldLife() {
        return new Promise(resolve => {
            console.log('Virtual World started!')

            const lifeCycle = setInterval(() => {
                this.currentValueOfWorldYears++

                console.log('One year has passed, now our world ' + this.currentValueOfWorldYears + ' years old')
            }, this.LENGTH_OF_ONE_YEAR)

            // через 100 минут (т.е. через 100 виртуальных лет) прекратить таймер
            setTimeout(() => {
                clearInterval(lifeCycle)

                resolve('The life cycle of the world is complete. The world is no more.')
            }, this.MAX_LENGTH_OF_WORLD_LIFE)
        })
    }

    makeCrysis() {
        return new Promise(resolve => {
            this.stateOfWorld = 'crysis'

            this.listOfEntities.forEach(entity => {
                entity.hp -= 10;
            })

            resolve('Crysis came... Everyone is f***ed')
        })
    }

    createEntity(n, m, lC, hp) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
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
            }, 12000)
        })
    }

    removeEntity(id) {
        return new Promise(resolve => {
            try {
                const entityToRemove = this.listOfEntities.findIndex(entity => entity.id === id)

                if (entityToRemove === 'undefined') {
                    throw new Error('Entity cannot be removed because not found')
                }

                this.listOfEntities.splice(entityToRemove)
            } catch (error) {
                console.log(error)
            }
        })
    }

    abc() {
        return new Promise(r => {
            console.log(this.listOfEntities)
        })
    }
}

class Entity {
    constructor(entity) {
        const { id, name, model, lifeCycle, hp, world } = entity

        this.id = id
        this.name = name
        this.model = model
        this.lifeCycle = lifeCycle * 6000
        this.hp = hp

        this.world = world
        this.currentValueOfEntityYears = 0
    }

    startEntityLife() {
        return new Promise(resolve => {
            const lifeCycle = setInterval(() => {
                this.currentValueOfEntityYears++

            }, this.world.LENGTH_OF_ONE_YEAR) // 6000

            setTimeout(() => {
                clearInterval(lifeCycle)

                resolve('Entity ' + this.name + ' died :(')

                this.world.removeEntity(this.id)
            }, this.lifeCycle)
        })
    }
}

const virlualWorld = new World()

virlualWorld.startWorldLife().then(result => console.log(result))

// через 2 года создать это
virlualWorld.createEntity('Nikita', 'MON', 10, 20) // ожидаемо, что через 12 лет после старта мира оно подохнет
    .then(result => console.log(result))
    .catch(result => console.log(result))

// через 3 года создать это

setTimeout(() => {
    virlualWorld.createEntity('Alex', 'MOA', 2, 20) // ожидаемо, что через 5 лет после старта мира оно подохнет
        .then(result => console.log(result))
        .catch(result => console.log(result))
}, 6000)

setTimeout(() => {
    virlualWorld.abc()
}, 24000)

setTimeout(() => {
    virlualWorld.abc()
}, 120000)

