import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderApp from './components/HeaderApp.js';
import UserBrowser from './containers/UserBrowser.js';

import CompanyBrowser from './containers/CompanyBrowser.js';
import SingleCompany from './containers/SingleCompany.js';
import StockVisualizer from './containers/StockVisualizer.js';

import AboutUs from './containers/AboutUs.js';
import SingleUser from './containers/SingleUser.js';
import Home from './containers/Home.js';
import Login from './containers/Login.js';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderApp />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/users" exact component={UserBrowser} />
          <Route path="/companies" exact component={CompanyBrowser} />
          <Route path="/visualizer" exact component={StockVisualizer} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/users/:id" exact component={SingleUser} />
          <Route path="/companies/:id" exact component={SingleCompany} />  
        </main>
      </div>
    );
  }
}

export default App;
