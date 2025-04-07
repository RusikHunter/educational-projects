const defaultState = {
    value: 0,
}

export const VALUE_UP = "VALUE_UP"
export const VALUE_DOWN = "VALUE_DOWN"
export const VALUE_UP_ASYNC = "VALUE_UP_ASYNC"
export const VALUE_DOWN_ASYNC = "VALUE_DOWN_ASYNC"

const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case VALUE_UP:
            return { ...state, value: state.value + 1 }
        case VALUE_DOWN:
            return { ...state, value: state.value - 1 }
        default:
            return state
    }
}

export const valueUpAction = () => ({ type: VALUE_UP })
export const valueDownAction = () => ({ type: VALUE_DOWN })
export const valueUpAsyncAction = () => ({ type: VALUE_UP_ASYNC })
export const valueDownAsyncAction = () => ({ type: VALUE_DOWN_ASYNC })



export default countReducer