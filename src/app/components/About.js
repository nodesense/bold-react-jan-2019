// About.js
import React, { Component } from 'react';

import store from '../store';

class About extends Component {
    render() {
        const state = store.getState();
        return (
            <div>
                <h2>About Page</h2>
                <p>Counter {state.counter} </p> 

            </div>
        );
    }
}

export default About;