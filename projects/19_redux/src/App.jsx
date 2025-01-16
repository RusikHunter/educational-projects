import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addCustomerAction, getCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/fetchCustomers';
import { valueUpAction, valueUpAsyncAction, valueDownAction, valueDownAsyncAction } from './store/countReducer'

function App() {
    const dispatch = useDispatch()
    // const cash = useSelector(state => state.cash.cash)
    // const customers = useSelector(state => state.customers.customers)

    const count = useSelector(state => state.count.value)


    // const addCash = () => {
    //     dispatch(addCashAction(5))
    // }

    // const getCash = () => {
    //     dispatch(getCashAction(5))
    // }

    // const addCustomer = () => {
    //     dispatch(addCustomerAction("Alex"))
    // }

    // const getCustomer = () => {
    //     dispatch(getCustomerAction())
    // }

    const upValue = () => {
        dispatch(valueUpAsyncAction())
    }

    const downValue = () => {
        dispatch(valueDownAsyncAction())
    }

    return (
        <>
            <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nihil iure, impedit magni, quod rem numquam modi asperiores laboriosam quasi blanditiis consequatur alias, iste temporibus! Debitis maiores dolorem quibusdam non.
            </h1>

            {/* <p>{cash}</p>

            {customers.length > 0 ?
                <p>
                    {customers.map(customer =>
                        <div>{customer}</div>
                    )}
                </p>
                :
                <p>No clients</p>
            } */}

            {/* <button onClick={addCash}>Add money</button>
            <button onClick={getCash}>Get money</button>
            <button onClick={addCustomer}>Add customer</button>
            <button onClick={() => dispatch(fetchCustomers())}>Add many customers</button>
            <button onClick={getCustomer}>Get customer</button> */}

            <p>Count: {count}</p>
            <button onClick={upValue}>+</button>
            <button onClick={downValue}>-</button>
        </>
    )
}

export default App