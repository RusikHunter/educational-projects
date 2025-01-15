import { createStore, combineReducers, applyMiddleware } from 'redux'
import cashReducer from './cashReducer.js'
import customerReducer from './customerReducer.js'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store