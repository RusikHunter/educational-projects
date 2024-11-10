import './styles.scss';

let param = 'engToRus'

const dictionaryEngToRus = {
    // eng big letters
    'A': 'А', 'B': 'Б', 'C': 'Ц', 'D': 'Д', 'E': 'Е',
    'F': 'Ф', 'G': 'Г', 'H': 'Х', 'I': 'И', 'J': 'Й',
    'K': 'К', 'L': 'Л', 'M': 'М', 'N': 'Н', 'O': 'О',
    'P': 'П', 'Q': 'К', 'R': 'Р', 'S': 'С', 'T': 'Т',
    'U': 'У', 'V': 'В', 'W': 'В', 'X': 'КС', 'Y': 'Ы',
    'Z': 'З',

    // eng small letters
    'a': 'а', 'b': 'б', 'c': 'ц', 'd': 'д', 'e': 'е',
    'f': 'ф', 'g': 'г', 'h': 'х', 'i': 'и', 'j': 'й',
    'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о',
    'p': 'п', 'q': 'к', 'r': 'р', 's': 'с', 't': 'т',
    'u': 'у', 'v': 'в', 'w': 'в', 'x': 'кс', 'y': 'ы',
    'z': 'з',
}

const dictionaryRusToEng = {
    // rus big letters
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
    'Е': 'E', 'Ё': 'E', 'Ж': 'ZH', 'З': 'Z', 'И': 'I',
    'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
    'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
    'У': 'U', 'Ф': 'F', 'Х': 'KH', 'Ц': 'TS', 'Ч': 'CH',
    'Ш': 'SH', 'Щ': 'SCH', 'Ь': "'", 'Ы': 'Y', 'Э': 'E',
    'Ю': 'YU', 'Я': 'YA',

    // rus small letters
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
    'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
    'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
    'ш': 'sh', 'щ': 'sch', 'ь': "'", 'ы': 'y', 'э': 'e',
    'ю': 'yu', 'я': 'ya'
}

const elements = {}

elements.inputTextElement = document.querySelector('[data-js-input]')
elements.outputTextElement = document.querySelector('[data-js-output]')
elements.paramsSelectElement = document.querySelector('[data-js-params]')
elements.translateButtonElement = document.querySelector('[data-js-button]')

const translate = () => {
    const text = elements.inputTextElement.value
    if (text.trim() === '') return

    let textToTranslate = ''

    switch (param) {
        case 'engToRus':
            textToTranslate = translateEngToRus(text)
            break
        case 'rusToEng':
            textToTranslate = translateRusToEng(text)
            break
    }

    elements.outputTextElement.textContent = textToTranslate
}

const translateEngToRus = (text) => {
    return text.split('').map(char => dictionaryEngToRus[char] || char).join('')
}

const translateRusToEng = (text) => {
    return text.split('').map(char => dictionaryRusToEng[char] || char).join('')
}

elements.paramsSelectElement.addEventListener('change', (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex]
    param = selectedOption.value
})

elements.translateButtonElement.addEventListener('click', () => {
    translate()
})