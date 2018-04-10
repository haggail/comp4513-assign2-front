import React, { Component } from 'react';

import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={user: '', pw: ''}
    }
    
    handleUserChange(event) {
        this.setState({user: event.target.value})
    }
    
    handlePwChange(event) {
        this.setState({pw: event.target.value})
    }
    
    handleLogin(event) {
        event.preventDefault()
        var testUser = {user: this.state.user};
        console.log(testUser)
        axios.post(`https://wiggly-kitty-services.herokuapp.com/api/users/`, { testUser })
        .then(response => {
            console.log(response);
            console.log(response.data);
      })
    }
    
    render() {
        return (
            <div>
            <article className="section columns is-paddingless is-mobile">
                <section className="column is-three-fifths is-offset-one-fifth">
                    <form onSubmit={this.handleLogin.bind(this)}>
                        <div className="login-box">
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input className="input" value={this.state.user} type="text" onChange={this.handleUserChange.bind(this)} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input className="input" value={this.state.pw} id="pw" type="password" onChange={this.handlePwChange.bind(this)} />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-link" >Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </article>
            </div>
        );
    }
}


                            
export default Login;