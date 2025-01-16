const defaultState = {
    users: [],
};

export const SET_USERS = 'SET_USERS';
export const FETCH_USERS = 'FETCH_USERS';

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USERS:
            console.log("SET_USERS action received:", action.payload); // Лог для проверки
            return { ...state, users: action.payload }; // Сохраняем данные
        default:
            return state;
    }
};

export const setUsersAction = (payload) => ({ type: SET_USERS, payload });
export const fetchUsersAction = () => ({ type: FETCH_USERS });

export default userReducer;