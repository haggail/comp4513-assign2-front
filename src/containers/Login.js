import React, { Component } from 'react';

import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={user: '', pw: '', goodUser: false}
    }
    
    handleUserChange(event) {
        this.setState({user: event.target.value})
        this.setState({badLogin: false})
    }
    
    handlePwChange(event) {
        this.setState({pw: event.target.value})
        this.setState({badLogin: false})
    }
    
    handleLogin(event) {
        event.preventDefault()
        var user = {user: this.state.user};
        
        axios.post(`https://wiggly-kitty-services.herokuapp.com/login1`, user)
        .then(response => {
            if (response.data.length === 0) {
                this.displayBadLogin()
            } else {
                var pwCheck = {pw: this.state.pw, salt: response.data[0].salt}
                axios.post(`https://wiggly-kitty-services.herokuapp.com/login2`, pwCheck)
                .then(response => {
                    if (response.data.length === 0) {
                        this.displayBadLogin()
                    } else {
                        //response.data = {this.props.goodAuth}
                    }
                })
            }
      })
    }
    
    displayBadLogin() {
        this.setState({badLogin: true})
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
                            {this.state.badLogin ?
                                <div className='notification is-primary'>Incorrect Email or Password</div>
                            : 
                                <p></p>
                            }

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