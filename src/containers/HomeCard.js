import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {cl: props.cl, link: props.link, title: props.title, sub: props.sub};
    }
    
    render() {
        return(
            <Link className={this.state.cl} to={ {pathname:this.state.link}}>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{this.state.title}</h1>
                        <h2 className="subtitle">{this.state.sub}</h2>
                    </div>
                </div>
            </Link>
            );
    }
}

export default Home;