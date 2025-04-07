const mapArrToString = require("./mapArrToString")

describe('mappArrToString', () => {
    test('Корректное значение', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
    })
})