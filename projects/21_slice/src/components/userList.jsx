import React from 'react'
import { useSelector } from 'react-redux'

const UserList = () => {
    const users = useSelector((state) => state.users.items)
    const status = useSelector((state) => state.users.status)
    const error = useSelector((state) => state.users.error)

    if (status === 'loading') {
        return <p>Загрузка...</p>
    }

    if (status === 'failed') {
        return <p>Ошибка: {error}</p>
    }

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UserList