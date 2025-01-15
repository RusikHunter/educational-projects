const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const GET_CUSTOMER = "GET_CUSTOMER"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"

const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }
        case GET_CUSTOMER:
            return { ...state, customers: state.customers.slice(0, -1) }
        case ADD_MANY_CUSTOMERS:
            return { ...state, customers: [...state.customers, ...action.payload] }
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const getCustomerAction = () => ({ type: GET_CUSTOMER })
export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload })

export default customerReducer