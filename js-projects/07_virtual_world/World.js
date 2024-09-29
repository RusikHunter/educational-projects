export class World {
    // const values
    NAME = 'Virtual World'
    LENGTH_OF_ONE_YEAR = 60 // 600ms
    MAX_LENGTH_OF_WORLD_LIFE = 60000 // 600000ms = 60s = 1m

    // changable values
    currentValueOfWorldYears = 0

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
}

// todo -> infinity cycle