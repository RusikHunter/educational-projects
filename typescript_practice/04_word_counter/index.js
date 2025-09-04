// function countWords(string: string): Record<string, number> {
//     const wordsArray: string[] = string.split(" ").map(word => word.toLowerCase())
//     const wordsObject: Record<string, number> = wordsArray.reduce((acc, key) => {
//         acc[key] = 0
//         return acc
//     }, {})
//     const keysArray: string[] = Object.keys(wordsObject)
//     const WORDS_ARRAY_LENGTH: number = wordsArray.length
//     const KEYS_ARRAY_LENGTH: number = keysArray.length
//     for (let i = 0; i < KEYS_ARRAY_LENGTH; ++i) {
//         for (let j = 0; j < WORDS_ARRAY_LENGTH; ++j) {
//             if (wordsArray[j] === keysArray[i]) {
//                 wordsObject[keysArray[i]]++
//             }
//         }
//     }
//     return wordsObject
// }
function countWords(string) {
    var wordsArray = string.split(" ").map(function (word) { return word.toLowerCase(); }); // Apple, banana, apple, string, fdff, gthgf, out, banana, banAnA
    var wordsObject = wordsArray.reduce(function (accumulator, word) {
        if (word in accumulator) {
            accumulator[word]++;
        }
        else {
            accumulator[word] = 1;
        }
        return accumulator;
    }, {});
    return wordsObject;
}
var string = "Apple banana apple string fdff gthgf out banana banAnA";
console.log(countWords(string));
