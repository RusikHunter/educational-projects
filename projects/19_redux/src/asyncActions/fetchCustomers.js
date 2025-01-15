import { addManyCustomersAction } from "../store/customerReducer"

export const fetchCustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                const names = users.map(user => user.name)
                return names
            })
            .then(names => dispatch(addManyCustomersAction(names)))
    }
}