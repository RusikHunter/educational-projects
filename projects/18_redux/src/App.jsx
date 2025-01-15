import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)


    const addCash = () => {
        dispatch({ type: "ADD_CASH", payload: 5 })
    }

    const getCash = () => {
        dispatch({ type: "GET_CASH", payload: 5 })
    }

    const addCustomer = () => {
        dispatch({ type: "ADD_CUSTOMER", payload: "Alex" })
    }

    const getCustomer = () => {
        dispatch({ type: "GET_CUSTOMER", payload: "Alex" })
    }

    return (
        <>
            <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nihil iure, impedit magni, quod rem numquam modi asperiores laboriosam quasi blanditiis consequatur alias, iste temporibus! Debitis maiores dolorem quibusdam non.
            </h1>

            <p>{cash}</p>

            {customers.length > 0 ?
                <p>
                    {customers.map(customer =>
                        <div>{customer}</div>
                    )}
                </p>
                :
                <p>No clients</p>
            }

            <button onClick={addCash}>Add money</button>
            <button onClick={getCash}>Get money</button>
            <button onClick={addCustomer}>Add customer</button>
            <button onClick={getCustomer}>Get customer</button>
        </>
    )
}

export default App