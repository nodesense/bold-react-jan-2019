// app/components/Counter.js

import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {

    //ES.NEXT Stage-2
    // allows static properties inside class
    static propTypes = {
        startValue: PropTypes.number
    }

    static defaultProps = {
        startValue: 0
    }

    // props are available as this.props
    constructor(props) {
        super(props); // MUST, calls base class cons
        console.log('Counter created this.props', this.props);
        console.log('Counter created props', props);

        //keyword
        // mutable data
        // state is owned by component instance
        // state is created when component created
        // state is lost when component destroyed
        this.state = {
            counter: this.props.startValue,
            show: true,
            flag: true
        }
    }

    // ES6 styled function
    // Better to write as ES.NEXT 
    increment() {
        console.log('increment called', this.state.counter);
        // UGLY
        this.state.counter++;
        // BAD
        this.forceUpdate(); // keyword, let react to call render
    }

    //ES.NEXT function
    decrement = () => {
        
        console.log('decrement called', this.state.counter);
        console.trace();
        
        //keyword
        // accept new state as argument
        // batch updates of states
        // merge state
        // async method
        // calls render method after merging state
        //GOOD
        this.setState({
            counter: this.state.counter - 1 // GOOD
        }, () => {
            // called after render
            console.log('set counter callback ', this.state.counter);
        });

        this.setState({
            flag: !this.state.flag
        });

        console.log('decrement called after', this.state.counter);
    }

    // life cycle method
    // called by react, before calling render method on update cycle
    // called only via setState, not by forceUpdate
    // return true/false
    // true calls render
    // false, doesn't call render
    shouldComponentUpdate(nextProps, nextState) {
        console.log("current state ", this.state);
        console.log("next state ", nextState);
        return true;
    }

    render() {
        console.log('Counter render');
        const {startValue} = this.props;
 
        return (
            <div>
                <h2>Counter</h2>
                <p> Start Value {startValue}</p>
                <p>Counter {this.state.counter}</p>
                <p>Flag {this.state.flag.toString()}</p>
                <button onClick={ ()=> this.increment() }>Incr</button> 
                <div  onClick={this.decrement}>
                    <button onClick={this.decrement}>Decr</button>
                </div>
            </div>
        )
    }
 
}

// ES6, static variable should be defined outside class
// Counter.propTypes = {
//     startValue: PropTypes.number
// }
// Counter.defaultProps = {
//     startValue: 0
// }