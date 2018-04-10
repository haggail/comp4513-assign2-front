import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderBar from './components/HeaderBar.js';
import BrowsePortfolio from './containers/BrowsePortfolio.js';
import CompanyBrowser from './containers/CompanyBrowser.js';
import SingleCompany from './containers/SingleCompany.js';
import StockVisualizer from './containers/StockVisualizer.js';

import AboutUs from './containers/AboutUs.js';
import Home from './containers/Home.js';
import Login from './containers/Login.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.state={goodUser: false, creds: null}
    }
    
    login(creds){
        this.setState({goodUser: true, creds: creds})
    }
    
    logout() {
        this.setState({goodUser: false, creds: null})
    }
    
    requireLogin (nextState, replace, next) {
        if (!this.state.goodUser) {
        }
        next();
    }
    render() {
        console.log(this.state.goodUser)
        return (
            <div>
                <HeaderBar logout={this.logout.bind(this)}/>
                    <main>
                        <Route path="/" exact component={Home} onEnter={this.requireLogin}/>
                        <Route path="/login" exact component={Login} goodAuth={this.login.bind(this)}/>
                        <Route path="/home" exact component={Home} onEnter={this.requireLogin} />
                        <Route path="/portfolios" exact component={BrowsePortfolio} onEnter={this.requireLogin} />
                        <Route path="/companies" exact component={CompanyBrowser} onEnter={this.requireLogin} />
                        <Route path="/visualizer" exact component={StockVisualizer} onEnter={this.requireLogin} />
                        <Route path="/about" exact component={AboutUs} onEnter={this.requireLogin} />
                        <Route path="/companies/:id" exact component={SingleCompany} onEnter={this.requireLogin} />  
                    </main>
            </div>
        );
    }
}

export default App;
