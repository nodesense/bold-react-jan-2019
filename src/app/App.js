// src/app/App.js

import React, {Component} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';

import Cart from './components/Cart';
import AuthRoute from './components/AuthRoute'; 

import {BrowserRouter as Router, 
        Route,
        Switch,
        Redirect
    } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

import ReduxCounter from './components/ReduxCounter';

import ReduxCart from './redux-cart/containers/Cart';
import ProductList from './redux-cart/containers/ProductList';

 
// import from container only
import FuncCounter from './containers/FuncCounter';

import Login from './containers/Login';


// class component
// react create object for class component
// calls render method, to get virtual dom
export default class App extends Component {
    // react keyword
    // Create virtual dom, return v.dom
    render() {
        console.log('App render called');
        return (
            <Router>
            <div>
                 <Header title="React App" >
                   <p>Shopping app</p>
                 </Header>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Redirect path="/home" to="/" />
                    
                    <AuthRoute path="/cart" component={Cart} />
                    <AuthRoute path="/redux-cart" component={ReduxCart} />
                    <AuthRoute path="/products" component={ProductList} />

                    <Route path="/about" component={About} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/redux-counter" component={ReduxCounter} />

                    <Route path="/func-counter" component={FuncCounter} />

                    <Route path="/login" component={Login} />

                    <Route path="/test" render={ () => (
                        <div>
                            <h2>TEst Page</h2>
                        </div>
                    )} />


                    
                    
                    <Route path="*" component={NotFound} />
                 </Switch>

                 <Footer company="Bold" 
                         year={2020 - 1} 
                         address = { {city:'Delhi', state:'DL', pincode: 123456} }
                         countries = { ['USA', 'IN'] }
                >
                    <p>Contact time: 9:00 to 5:00 PM IST</p>
                    <p>Contact time: 8:00 to 5:00 PM MT</p>

                </Footer>
            </div>
            </Router>
        )
    }
}