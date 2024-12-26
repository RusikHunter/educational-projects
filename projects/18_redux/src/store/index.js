import { createStore, combineReducers } from 'redux'
import cashReducer from './cashReducer.js'
import customerReducer from './customerReducer.js'

const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})

const store = createStore(rootReducer)

export default store