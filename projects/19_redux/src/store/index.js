import { createStore, combineReducers, applyMiddleware } from 'redux'
import cashReducer from './cashReducer.js'
import customerReducer from './customerReducer.js'
import countReducer from './countReducer.js'
// import { thunk } from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { countWatcher } from '../saga/countSaga.js'

const sagaNiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    count: countReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaNiddleware))

sagaNiddleware.run(countWatcher)

export default store