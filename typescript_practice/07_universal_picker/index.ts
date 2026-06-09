type DefaultObject = Record<string, number>

function pickSpecifiedFields(object: DefaultObject, keys: string[]) {

}

const object: DefaultObject = { "abc": 123, "def": 456 }
const keys: string[] = ["abc", "fdg"]