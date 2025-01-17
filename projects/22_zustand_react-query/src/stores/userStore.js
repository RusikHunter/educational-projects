import { create } from 'zustand'

export const useUsersStore = create((set) => ({
    users: [],
    currentUser: null,
    settings: [],
    isLoading: false,
    errors: [],
    addUser: (username) => set(state => ({
        users: [
            ...state.users,
            username
        ]
    })),
    fetchUsers: async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await result.json()
        const userNames = json.map(user => user.name)

        set(state => ({ users: [...state.users, ...userNames] }))
    }
}))