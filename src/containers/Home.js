import React, { Component } from 'react';
import HomeCard from '../containers/HomeCard.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path:["Home"]
        };
    }
    
    render() {
        return(
                <article className="section columns is-mobile">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <HomeCard cl="hero is-primary is-bold" link="/users" title="Users" sub="Browse the users in our system"/>
                        <HomeCard cl="hero is-info is-bold" link="/companies" title="Stocks" sub="Browse the stocks in our system"/>
                        <HomeCard cl="hero is-success is-bold" link="/about" title="About Us" sub="Find out more about our system"/>
						<HomeCard cl="hero is-success is-bold" link="/about" title="Browse Portfolio" sub=""/>
						<HomeCard cl="hero is-success is-bold" link="/companies" title="Browse Companies" sub=""/>
						<HomeCard cl="hero is-success is-bold" link="/about" title="Stock Visualizer" sub=""/>
                    </div>
                </article>
            );
    }
}

export default Home;