const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const GET_CUSTOMER = "GET_CUSTOMER"

const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }
        case GET_CUSTOMER:
            return { ...state, customers: state.customers.slice(0, -1) }
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const getCustomerAction = () => ({ type: GET_CUSTOMER })

export default customerReducer