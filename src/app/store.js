 // store.js
import {createStore, 
       combineReducers } from 'redux';

import counterReducer from './state/counterReducer';
import cartReducer from './redux-cart/state/cartReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    items: cartReducer
})

const store = createStore(rootReducer);

export default store;