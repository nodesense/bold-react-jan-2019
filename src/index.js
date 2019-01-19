// src/index.js
// bootstrap react app into browser
import ReactDOM from 'react-dom';
import React from 'react';
import App from './app/App';

import './index.css';

import store from './app/store';
import {Provider} from 'react-redux';

// Provider provides store to containers

console.log('starting react');
// args: Virtual DOM, Real DOM
// V.DOM ==> REAL DOM
ReactDOM.render( <Provider store={store}>
                         <App />
                 </Provider>,
                 document.getElementById('root'));


 
   