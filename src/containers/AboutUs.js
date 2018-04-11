import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb.js'

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: ["Home", "About Us"]
        };
    }
    
    render() {
        return(
            <div>
                <Breadcrumb links={this.state.path}/>
                <article className="section columns is-paddingless">
                    <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
                        <h4 className="title is-4">Haggai Lazaro</h4>
                        <h5 className="subtitle is-5">COMP 4513: Assignment 2</h5>
                        <br/>
                        <p>Github:</p>
                        <a href='https://github.com/haggail/comp4513-assign2-front>'>Front End</a>
                        <a href='https://github.com/haggail/comp4513-assign2-services>'>Back End</a>
                        <a href='https://www.mlab.com'>mLab</a>
                        <a href='https://www.heroku.com/'>Heroku><a>
                        <p>Other Tech and Code:</p>
                        <p>Recharts: <a href='http://recharts.org/'>Recharts</a></p>
                        <p>Bulma documentation: <a href="https://bulma.io/documentation/overview/start/">Bulma</a></p>
                        <p>Array sort functions: <a href="https://www.w3schools.com/js/js_array_sort.asp">W3Schools</a></p>
                        <p>Expression embedding: <a href="https://reactjs.org/docs/conditional-rendering.html">React JS</a></p>
                    </div>
                    
                </article>
            </div>
            );
    }
}

export default AboutUs;