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
    IDOfNextEntity = 0

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

    createEntity(n, m, lC) {
        return new Promise((resolve, reject) => {
            let newEntity = []

            if (Tools.isStringCorrect(n) && Tools.isStringCorrect(m) && Tools.isNumberCorrect(lC)) {
                newEntity = {
                    id: this.IDOfNextEntity++,
                    name: n,
                    model: m,
                    lifeCycle: lC
                }

                const entityToAdding = new Entity(newEntity)

                this.listOfEntities.push(entityToAdding)
            }
        })
    }
}

class Entity {
    constructor(entity) {
        const { id, name, model, lifeCycle } = entity

        this.id = id
        this.name = name
        this.model = model
        this.lifeCycle = lifeCycle

        console.log('Entity ' + this.id + ' is created! Name: ' + this.name + '; Model: ' + this.model + '; Life cycle: ' + this.lifeCycle + ';')
    }
}

const virlualWorld = new World()

virlualWorld.startWorldLife().then(result => console.log(result))

virlualWorld.createEntity('Nikita', 'MON', 99)


