const library = []

const isStringCorrect = (s) => {
    return typeof s === 'string' && s.trim().length !== 0
}

const isNumberCorrect = (n) => {
    return typeof n === 'number' && Number.isFinite(n) && Number.isInteger(n) && n >= 0;
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

    return // console.log('Added book with ID: ' + newID)
}

const removeBook = (id) => {
    if (isNumberCorrect(id)) {
        library.splice(id, 1);

        return console.log('Removed book with ID: ' + id)
    }

    return console.log('Incorrect ID')
}

const searchByTitle = (t) => {
    if (!isStringCorrect(t)) {
        return false
    }

    const list = library.filter(book => book.title === t)

    return list
}

const searchByAuthor = (a) => {
    if (!isStringCorrect(a)) {
        return false
    }

    const list = library.filter(book => book.author === a)

    return list
}

const searchByYear = (y) => {
    if (!isNumberCorrect(y)) {
        return false
    }

    const list = library.filter(book => book.year === y)

    return list
}

const searchByGenre = (g) => {
    if (!isStringCorrect(g)) {
        return false
    }

    const list = library.filter(book => book.genre === g)

    return list
}

const searchBooks = (param, searchByParameter) => {
    const books = searchByParameter(param)

    if (books === false) {
        return console.log('Incorrect data')
    } else if (books.length === 0) {
        return console.log('No books found')
    } else {
        formatBooks(books)
    }
}

const setBookRead = (t) => {
    const ID = library.findIndex(book => book.title === t) // 0

    if (typeof ID !== 'number' || ID < 0) {
        return console.log('Incorrect title or data')
    }

    library[ID].isRead = true;

    return console.log('Book "' + t + '" is read')
}

const formatBooks = (b = library) => {
    b.forEach(book => {
        console.log('ID: ' + book.id
            + '; Title: ' + book.title
            + '; Author: ' + book.author
            + '; Year: ' + book.year
            + '; Genre: ' + book.genre + ';')
    })
}

const sortBooks = (param) => {
    const booksToSorting = [...library]

    switch (param) {
        case 'title':
            booksToSorting.sort((a, b) => a.title.localeCompare(b.title))
            break
        case 'author':
            booksToSorting.sort((a, b) => a.author.localeCompare(b.author))
            break
        case 'year':
            booksToSorting.sort((a, b) => b.year - a.year)
            break
        default:
            booksToSorting.sort((a, b) => a.title.localeCompare(b.title))
    }

    formatBooks(booksToSorting)
}

const formatStat = () => {
    const readedBooksCount = library.reduce((count, book, index) => {
        if (book.isRead === true) {
            return count + 1
        } else {
            return count
        }
    }, 0)

    const notReadedBooksCount = library.reduce((count, book, index) => {
        if (book.isRead === false) {
            return count + 1
        } else {
            return count
        }
    }, 0)

    console.log('Total count of books: ' + library.length)
    console.log('Readed books: ' + readedBooksCount)
    console.log('Not readed books: ' + notReadedBooksCount)
}

addBook('Book 1', 'Doloraa', 1995, 'Amet')
addBook('Book 2', 'Dolor', 2005, 'Amet')
addBook('Book 1', 'Dolorrr', 1488, 'Amet')
addBook('Book 4', 'Dolorqq', 1337, 'Amet')
addBook('Book 5', 'Dolor', 2001, 'Amet')

formatStat()
setBookRead('Book 1')
formatStat()
