 // store.js
import {createStore, 
       combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import counterReducer from './state/counterReducer';
import authReducer from './state/authReducer';


import cartReducer from './redux-cart/state/cartReducer';
import productReducer from './redux-cart/state/productReducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    items: cartReducer,
    product: productReducer,
    auth: authReducer
})

function loggerMiddleware(store) {
    return function(nextFn) {
        return function(action) {
            console.log("LOGGER ", action);
            console.log('Action Type ', typeof action);

            // if (typeof action === 'function') {
            //     return action(store.dispatch, store.getState);
            // }

            // forward action to next middleware or reducers
            return nextFn(action);
        }
    }
}

const store = createStore(rootReducer, 
                         applyMiddleware(loggerMiddleware, thunk));

export default store;