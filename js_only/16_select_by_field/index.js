const users = [
    { name: "Alex", age: 20 },
    { name: "Bob", age: 21 },
    { name: "John", age: 20 },
    { name: "Kate", age: 22 },
    { name: "Max", age: 21 },
]

function groupBy(users, field) {
    const groupedUsers = {}

    for (let i = 0; i < users.length; ++i) {

        const userFieldValue = users[i][field] // 20

        if (!userFieldValue) return

        const prevArray = groupedUsers[userFieldValue]

        if (!prevArray) {
            groupedUsers[userFieldValue] = [users[i]]
        } else {
            groupedUsers[userFieldValue] = [...prevArray, users[i]]
        }
    }

    return groupedUsers
}

const groupedUsersByAge = groupBy(users, "age")
console.log(groupedUsersByAge)