const library = []

const isStringCorrect = (s) => {
    return typeof s === 'string' && s.trim().length !== 0
}

const isNumberCorrect = (n) => {
    return typeof n === 'number' && Number.isFinite(n) && Number.isInteger(n) && n >= 0;
}

const searchByTitle = (t) => {
    if (!isStringCorrect(t)) {
        return false
    }

    const index = library.findIndex(book => book.title === t)

    if (index !== -1) {
        return library[index].id
    } else {
        return false;
    }
}

const searchByAuthor = (a) => {
    if (!isStringCorrect(a)) {
        return false
    }

    const index = library.findIndex(book => book.author === a)

    if (index !== -1) {
        return library[index].id
    } else {
        return false;
    }
}

const searchByYear = (y) => {
    if (!isNumberCorrect(y)) {
        return false
    }

    const index = library.findIndex(book => book.year === y)

    if (index !== -1) {
        return library[index].id
    } else {
        return false;
    }
}

const searchByGenre = (g) => {
    if (!isStringCorrect(g)) {
        return false
    }

    const index = library.findIndex(book => book.genre === g)

    if (index !== -1) {
        return library[index].id
    } else {
        return false;
    }
}

const addBook = (t, a, y, g) => {
    if (!isStringCorrect(t) || !isStringCorrect(a) || !isNumberCorrect(y) || !isStringCorrect(g)) {
        return console.log('Incorrect data')
    }

    const newID = library.length; // 0

    library.push({
        id: newID,
        title: t,
        author: a,
        year: y,
        genre: g,
        isRead: false
    })

    return console.log('Added book with ID: ' + newID)
}

const removeBook = (id) => {
    if (isNumberCorrect(id)) {
        library.splice(id, 1);

        return console.log('Removed book with ID: ' + id)
    }

    return console.log('Incorrect ID')
}

const searchBook = (param, searchByParameter) => {
    const IDOfBook = searchByParameter(param)

    if (IDOfBook === false) {
        return console.log('Incorrect data')
    }

    return console.log('Book: ' + IDOfBook)
}

const setBookRead = (t) => {
    const ID = searchByTitle(t)

    if (ID === false) {
        return console.log('Incorrect title')
    }

    library[ID].isRead = true;

    return console.log('Book "' + t + '" is read')
}

addBook('Book 1', 'Dolor', 1995, 'Amet')
addBook('Book 2', 'Dolor', 2005, 'Amet')
addBook('Book 3', 'Dolor', 1488, 'Amet')
addBook('Book 4', 'Dolor', 1337, 'Amet')
addBook('Book 5', 'Dolor', 2001, 'Amet')

// debugger
// searchBook('Amet', searchByGenre)
// debugger
setBookRead('Book 1')


console.log(library)