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
                        <img className="kitty-size" src="/giphy.gif" alt="Me when I finish a web assignment"/>
                        <hr/>
                        <h4 className="title is-4">Haggai Lazaro</h4>
                        <h5 className="subtitle is-5">COMP 4513: Assignment 2</h5>
                        <br/>
                        <p>Tech and Code:</p>
                        <p>Bulma documentation: <a href="https://bulma.io/documentation/overview/start/">Bulma</a></p>
                        <p>Array sort functions: <a href="https://www.w3schools.com/js/js_array_sort.asp">W3Schools</a></p>
                        <p>Expression embedding: <a href="https://reactjs.org/docs/conditional-rendering.html">React JS</a></p>
                        <p>Wiggly Cat: <a href="https://giphy.com/gifs/wiggle-shaq-13CoXDiaCcCoyk">Giphy</a></p>
                    </div>
                    
                </article>
            </div>
            );
    }
}

export default AboutUs;