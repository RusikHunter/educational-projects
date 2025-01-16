import { increment, decrement, incrementByAmount } from './reduxToolkit/counterSlice';
import { useSelector, useDispatch } from 'react-redux'

export default function App() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <p>{count}</p>

            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}> -</button >
            <button onClick={() => dispatch(incrementByAmount(10))}>+10</button >
        </>
    )
}