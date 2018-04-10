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
                        <HomeCard cl="hero is-info is-bold" link="/companies" title="Browse Companies" sub="Browse the companies in our system"/>
                        <HomeCard cl="hero is-success is-bold" link="/visualizer" title="Stock Visualizer" sub="View stock charts"/>
                        <HomeCard cl="hero is-success is-bold" link="/about" title="About Us" sub="Find out more about our system"/>
                    </div>
                </article>
            );
    }
}

export default Home;