function getTextStats(text) {
    const statsObject = {
        sentencesCount: null,
        mostCommonWords: null
    }

    const words = text.split(" ")

    // const sentences = text.split(".")

    // statsObject[wordsCount] = words.length

    // statsObject[averageWordLength] = words.reduce((acc, word) => {
    //     return acc += word.length
    // }, 0) / words.length

    // statsObject[sentencesCount] = sentences.length

    const objectOfWordCount = {}
    let wordsWithOccurrencesCount = []
    const mostCommonWords = []

    for (const word of words) {
        const valueToAdding = objectOfWordCount[word] !== undefined ? objectOfWordCount[word] : 0

        objectOfWordCount[word] = valueToAdding + 1
    }

    wordsWithOccurrencesCount = Object.entries(objectOfWordCount)

    for (const value of wordsWithOccurrencesCount) {
        greatestNumberOfOccurrences = wordsWithOccurrencesCount.sort((a, b) => {
            return a - b
        })

        mostCommonWords.push(wordsWithOccurrencesCount[greatestNumberOfOccurrences])

        wordsWithOccurrencesCount.splice(wordsWithOccurrencesCount.indexOf(greatestNumberOfOccurrences), 1)
    }

    console.log(mostCommonWords)
}

getTextStats("apple banana apple banana zitrone apple apple mango mango mango mango mango mango mango aye aye ue ue ue i orange")