function countWords(string) {
    const wordsArray = string.split(" ").map(word => word.toLowerCase())
    const wordsObject = wordsArray.reduce((acc, key) => {
        acc[key] = 0
        return acc
    }, {})
    const keysArray = Object.keys(wordsObject)

    const WORDS_ARRAY_LENGTH = wordsArray.length
    const KEYS_ARRAY_LENGTH = keysArray.length

    for (let i = 0; i < KEYS_ARRAY_LENGTH; ++i) {

        for (let j = 0; j < WORDS_ARRAY_LENGTH; ++j) {

            if (wordsArray[j] === keysArray[i]) {
                wordsObject[keysArray[i]]++
            }
        }
    }

    return wordsObject
}

const string = "Apple banana apple string fdff gthgf out banana banAnA"
console.log(countWords(string))