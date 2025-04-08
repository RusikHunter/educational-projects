import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Users from './Users'
import axios from "axios"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import UserDetailsPage from '../pages/UserDetailsPage'

jest.mock("axios")

describe('USERS TEST', () => {
    let response
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "John Davis",
                },
                {
                    "id": 3,
                    "name": "Brandon Leanne",
                }
            ]
        }
    })
    test('render users', async () => {
        axios.get.mockReturnValue(response)
        render(<MemoryRouter initialEntries={['/users']}>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetailsPage />} />
            </Routes>
        </MemoryRouter>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        expect(axios.get).toBeCalledTimes(1)
        screen.debug()
    })

    test('redirect to details page test', async () => {
        axios.get.mockReturnValue(response)
        render(
            <MemoryRouter initialEntries={['/users']}>
                <Routes>
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<UserDetailsPage />} />
                </Routes>
            </MemoryRouter>
        )
        const users = await screen.findAllByTestId('user-item')
        userEvent.click(users[0])
        expect(screen.getByTestId('user-details-page')).toBeInTheDocument()
        expect(users.length).toBe(3)
        expect(axios.get).toBeCalledTimes(1)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})