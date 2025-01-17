import { useUsersStore } from './stores/userStore'

export default function App() {
    const users = useUsersStore(state => state.users)
    const addUser = useUsersStore(state => state.addUser)
    const fetchUsers = useUsersStore(state => state.fetchUsers)

    return (
        <>
            <p>{
                users.map((user, index) => {
                    return <p key={index}>{user}</p>
                })
            }</p>
            <button onClick={() => {
                addUser('Nikita')
            }}>Add User</button>
            <button onClick={() => {
                fetchUsers()
            }}>Fetch users</button>
        </>
    )
}