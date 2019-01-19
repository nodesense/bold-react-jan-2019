// app/components/FuncCounter.js

import React from 'react';
import PropTypes from 'prop-types';
 
export default function FuncCounter(props){
        console.log('FuncCounter render');
         
        return (
            <div>
                <h2>Counter</h2>
                 
                <p>Counter {props.counter} </p> 
                <button onClick={props.increment}>Incr</button> 
                {/*  wrapper is bind action wrapper function
                   arg 1 is passed to wrapper function
                   , wrapper function pass arg 1 to action creator
                   dispatch the action
                */}
                <button onClick={() => props.decrement(1)}>Decr</button>

                <button onClick={() => props.actions.increment(2)}>+2</button>
                <button onClick={() => props.actions.decrement(2)}>-2</button>

             </div>
        )
    
 
}
