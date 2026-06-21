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

        const userFieldValue = users[i][field]

        if (userFieldValue === undefined) return

        const prevArray = groupedUsers[userFieldValue]

        if (!prevArray) {
            groupedUsers[userFieldValue] = []
        }

        groupedUsers[userFieldValue].push(users[i])
    }

    return groupedUsers
}

const groupedUsersByAge = groupBy(users, "age")
console.log(groupedUsersByAge)