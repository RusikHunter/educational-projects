function getTextStats(text) {
    const statsObject = {}

    // data

    let defaultWords = text.split(" ")
    let words = []

    for (let word of defaultWords) {
        words.push(word.replace(/[^a-zA-Z]/g, ""))
    }

    const sentences = text.split(".")

    const MAX_COUNT_OF_MOST_COMMON_WORDS = 5

    // logic

    statsObject.wordsCount = words.length

    statsObject.averageWordLength = Number((words.reduce((acc, word) => {
        return acc += word.length
    }, 0) / words.length).toFixed(1))

    statsObject.sentencesCount = sentences.length

    const wordsWithCount = {}

    for (const word of words) {
        wordsWithCount[word] = wordsWithCount[word] !== undefined ? wordsWithCount[word] + 1 : 1
    }

    statsObject.mostCommonWords = Object.entries(wordsWithCount).sort((a, b) => b[1] - a[1]).slice(0, 5)

    return statsObject
}

const text = `JavaScript is a programming language that is widely used for building interactive web applications. JavaScript allows developers to handle events, update page content, and interact with users. Many developers choose JavaScript because it is flexible and supported by all modern browsers.`

const statsOfText = getTextStats(text)

console.log(statsOfText)