async function fetchUserss(ids) {
    const users: any[] = []

    for (let i = 0; i < ids.length; ++i) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ids[i]}`)
        const user = await response.json()

        if ("name" in user) {
            users.push(user)
        }
    }

    return users
}

const idss = [1, 2, 178, 9, 91]

fetchUsers(ids).then(console.log)