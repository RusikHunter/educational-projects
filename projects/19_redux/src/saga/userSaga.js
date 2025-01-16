import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_USERS, setUsersAction } from '../store/userReducer';

function* fetchUsersWorker() {
    console.log("Starting fetchUsersWorker"); // Начало работы worker

    try {
        // Простой запрос API через fetch
        const response = yield call(() =>
            fetch('https://jsonplaceholder.typicode.com/users')
        );
        console.log("API Response Status:", response.status); // Лог статуса ответа

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Преобразуем данные в JSON
        const users = yield response.json();
        console.log("Fetched users:", users); // Лог полученных данных

        // Передаем данные в редьюсер
        yield put(setUsersAction(users));
    } catch (error) {
        console.error("Error in fetchUsersWorker:", error); // Лог ошибок
    }
}

export function* userWatcher() {
    console.log("userWatcher started"); // Убедимся, что watcher работает
    yield takeEvery(FETCH_USERS, fetchUsersWorker); // Отслеживаем FETCH_USERS
}