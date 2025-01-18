import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { persist } from 'zustand/middleware'
import axios from 'axios'

// ! persist

export const useUsersStore = create(persist(devtools(immer((set) => ({
    users: [],
    currentUser: null,
    settings: [],
    isLoading: false,
    errors: [],
    addUser: (username) => set(state => {
        state.users.push(username)
    }),
    fetchUsers: async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        const json = await result.json()
        const userNames = json.map(user => user.name)

        set(state => ({ users: [...state.users, ...userNames] }))
    }
})))))