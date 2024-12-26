import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)

    const addCash = () => {
        dispatch({ type: "ADD_CASH", payload: 5 })
    }

    const getCash = () => {
        dispatch({ type: "GET_CASH", payload: 5 })
    }

    return (
        <>
            <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nihil iure, impedit magni, quod rem numquam modi asperiores laboriosam quasi blanditiis consequatur alias, iste temporibus! Debitis maiores dolorem quibusdam non.
            </h1>

            <p>{cash}</p>

            <button onClick={addCash}>Add money</button>
            <button onClick={getCash}>Get money</button>
        </>
    )
}

export default App
