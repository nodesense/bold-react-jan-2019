// app/components/ReduxCounter.js

import React from 'react';
import PropTypes from 'prop-types';

// throw-away -to understand redux api
import store from '../store';
import * as actions from '../state/actions';

export default class ReduxCounter extends React.Component {
 
    increment = () => {
         const action = actions.increment(1);
         console.log('dispatching action ', action);

         store.dispatch(action);

         const state = store.getState();
         console.log('State now', state);
    }

    //ES.NEXT function
    decrement = () => {
         const action = {
             type: 'UNKNOWN'
         }
         console.log('dispatching action ', action);
         store.dispatch(action);
    }

    componentDidMount() {
        this.unsubscribeFn = store.subscribe ( ()=> {
            // callback, called by store for every dispatch
            console.log('redux counter subscribe');
            this.forceUpdate();
        })
    }
 
    componentWillUnmount() {
        console.log('ReduxCounter will unmount');
        this.unsubscribeFn(); // unsubscribe from store update
    }

    render() {
        console.log('Counter render');
         
        const state = store.getState();
        console.log("STate is ", state); // {counter: 0}
 
        return (
            <div>
                <h2>Counter</h2>
                 
                <p>Counter {state.counter} </p> 
                <button onClick={ ()=> this.increment() }>Incr</button> 
                <div  onClick={this.decrement}>
                    <button onClick={this.decrement}>Decr</button>
                </div>
            </div>
        )
    }
 
}
