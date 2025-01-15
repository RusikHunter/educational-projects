const defaultState = {
    customers: []
}

const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return { ...state, customers: [...state.customers, action.payload] }
        case "GET_CUSTOMER":
            return { ...state, customers: state.customers.slice(0, -1) }
        default:
            return state
    }
}

export default customerReducer