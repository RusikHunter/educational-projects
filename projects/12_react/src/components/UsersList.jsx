import User from './User.jsx'

export default function UsersList() {
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ]

    return (
        <ul>
            {users.map(user => (
                <User name={user.name} />
            ))}
        </ul>
    )
}