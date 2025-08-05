type User = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

async function fetchUserss(ids): Promise<User[]> {
    const users: User[] = []

    for (let i = 0; i < ids.length; ++i) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ids[i]}`)
        const user: User = await response.json()

        if ("name" in user) {
            users.push(user)
        }
    }

    return users
}

const idss: number[] = [1, 2, 178, 9, 91]

fetchUserss(idss).then(console.log)