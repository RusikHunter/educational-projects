import { Tools } from "./Tools.js"
import { World } from "./World.js"
import { Entity } from "./Entity.js"

new Tools()

const virlualWorld = new World()

virlualWorld.startWorldLife().then(result => console.log(result))

// через 0 года создать это
virlualWorld.createEntity('Nikita', 'MON', 10, 10) // ожидаемо, что через 10 лет после старта мира оно подохнет
    .then(result => console.log(result))
    .catch(result => console.log(result))

virlualWorld.createEntity('Alex', 'MOA', 12, 10) // ожидаемо, что через 10 лет после старта мира оно подохнет
    .then(result => console.log(result))
    .catch(result => console.log(result))

setTimeout(() => {
    virlualWorld.listOfEntities[0].doSomething()
}, 18000)

setTimeout(() => {
    virlualWorld.listOfEntities[0].eating()
}, 24000)

setTimeout(() => {
    virlualWorld.listOfEntities[0].usingDrugs()
}, 36000)

setTimeout(() => {
    virlualWorld.listOfEntities[0].eating()
}, 6000)

setTimeout(() => {
    virlualWorld.logInfo()
}, 9000)