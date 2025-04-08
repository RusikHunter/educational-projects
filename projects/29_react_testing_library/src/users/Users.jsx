import React, { useEffect, useState } from "react"
import axios from "axios"

export default function Users() {
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <>
            {users.map(user => <p key={user.id} data-testid="user-item">{user.name}</p>)}
        </>
    )
}