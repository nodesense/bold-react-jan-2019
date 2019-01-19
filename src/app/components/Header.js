// app/components/Header.js
import React from 'react';

import {NavLink} from 'react-router-dom';

// React calls the function,
// get the virtual dom
// create and return virtual dom
// properties passed as first argument
export default function Header(props) {
    console.log('Header render', props);

    // props are immutable
    //props.title = "Hello"; // not allowed

    //deconstruct, props.invoice.address.city
    // const title  = props.title;
    const {title} = props; 

    // BAD, props should be read only
    //title = "Hello";

    return (
        <div>
            <h2>{title}</h2>
            {props.children}

            <NavLink to="/" 
                    className="button" 
                    activeClassName="success" 
                    exact >Home</NavLink>
 
            <NavLink to="/cart"  
                     className="button" 
                     activeClassName="success" >Cart</NavLink>

            <NavLink to="/products"  
                     className="button" 
                     activeClassName="success" >Products</NavLink>

            <NavLink to="/about"  
                     className="button" 
                     activeClassName="success" >About</NavLink>

            <NavLink to="/counter"  
                     className="button" 
                     activeClassName="success" >Counter</NavLink>



            <NavLink to="/redux-counter"  
                     className="button" 
                     activeClassName="success" >Redux Counter</NavLink>


            <NavLink to="/func-counter"  
                     className="button" 
                     activeClassName="success" >Func Counter</NavLink>


            <NavLink to="/redux-cart"  
                     className="button" 
                     activeClassName="success" >Redux Cart</NavLink>

            <NavLink to="/login"  
                     className="button" 
                     activeClassName="success" >Login</NavLink>

            
            <NavLink to="/test"  
                     className="button" 
                     activeClassName="success" >Test</NavLink>

            <NavLink to="/dynamic"  
                     className="button" 
                     activeClassName="success" >Dynamic</NavLink>


            <hr />
        </div>
    )
}