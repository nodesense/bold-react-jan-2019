import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
                {
                    this.props.authenticated?  <button onClick={this.props.actions.logout}>Logout</button> : 
                                            <button onClick={this.props.actions.login}>Login</button>
                }
                
            </div>
        );
    }
}

export default Login;