const axios = require("axios")
const mapArrToString = require("../mapArrToString/mapArrToString")

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const userIds = response.data.map(user => user.id)
        return mapArrToString(userIds)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getData