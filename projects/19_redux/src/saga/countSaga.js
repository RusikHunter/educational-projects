import { put, takeEvery, call } from 'redux-saga/effects'
import { VALUE_UP, VALUE_UP_ASYNC, VALUE_DOWN, VALUE_DOWN_ASYNC } from '../store/countReducer'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementWorker() {
    yield call(delay, 1000)
    yield put({ type: VALUE_UP })
}

function* decrementWorker() {
    yield call(delay, 1000)
    yield put({ type: VALUE_DOWN })
}

export function* countWatcher() {
    yield takeEvery(VALUE_UP_ASYNC, incrementWorker)
    yield takeEvery(VALUE_DOWN_ASYNC, decrementWorker)
}