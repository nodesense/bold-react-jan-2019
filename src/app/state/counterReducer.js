// counterReducer.js

import * as ActionTypes from './action-types';
const INITIAL_STATE = 0;

// at very first, state is undefined
// if state is undefined, INITIAL_STATE used to initialize the state
// state is passed by store
// action is passed by dispatch
// reducer called very first time to initialize state
// called on every dispatch
export default function counterReducer(state = INITIAL_STATE, action) {
    console.log('counterReducer', state, action);

    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state + action.payload.value; // return new state
        case ActionTypes.DECREMENT:
            return state - action.payload.value;

        default: // MUST
            return state;
    }
}