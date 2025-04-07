import { all } from 'redux-saga/effects';
import { countWatcher } from './countSaga';
import { userWatcher } from './userSaga';

export function* rootWatcher() {
    console.log("rootWatcher started");
    yield all([
        countWatcher(),
        userWatcher(), // Убедитесь, что watcher вызывается
    ]);
}