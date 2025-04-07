import { createStore, combineReducers, applyMiddleware } from 'redux'
import cashReducer from './cashReducer.js'
import customerReducer from './customerReducer.js'
import countReducer from './countReducer.js'
import userReducer from './userReducer.js'
// import { thunk } from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { countWatcher } from '../saga/countSaga.js'
import { rootWatcher } from '../saga/index.js'

const sagaNiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    count: countReducer,
    users: userReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaNiddleware))

sagaNiddleware.run(rootWatcher)

export default store