import { World } from "./World.js";

const virlualWorld = new World()

virlualWorld.startWorldLife().then(result => console.log(result))
