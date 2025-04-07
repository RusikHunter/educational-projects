import { increment, decrement, incrementByAmount } from './reduxToolkit/counterSlice';
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchUsers } from './reduxToolkit/userSlice'
import UserList from './components/userList'

export default function App() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <>
            <p>{count}</p>

            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}> -</button >
            <button onClick={() => dispatch(incrementByAmount(10))}>+10</button >

            <div>
                <h1>Список пользователей</h1>
                <UserList />
            </div>
        </>
    )
}