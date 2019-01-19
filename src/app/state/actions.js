// actions.js
// Action helpers, they create action object
import * as ActionTypes from './action-types';

export function increment(value) {
    return {
        type: ActionTypes.INCREMENT,
        payload: {value: value}
    }
}

//es6
export const decrement = (value) => ({
    type: ActionTypes.DECREMENT,
    payload: {value}
})

export const logout = () => ({
    type: ActionTypes.LOGGED_OUT
})

export const login = () => ({
    type: ActionTypes.LOGGED_IN
})