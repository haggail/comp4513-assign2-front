/*import React, { Component } from 'react';
import SingleUserDetails from '../containers/SingleUserDetails.js';
import SingleUserPortfolio from '../containers/SingleUserPortfolio.js';
import Breadcrumb from '../components/Breadcrumb.js';

import axios from 'axios';

class SingleUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsTab: true,
            path: ["Home", "Users", "Single User"]
        };
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
        .then(response => {
            this.setState({user: response.data});
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    
    detailsDisplay=()=> {
        this.setState({
           detailsTab: true
        });
    }
    
    portfolioDisplay=()=> {
        this.setState({
           detailsTab: false
        });
    }
    
    render() {
        if (! this.state.user || this.state.user.length === 0) {
            return null;
        } else {
            return(
                <div>
                    <Breadcrumb links={this.state.path}/>
                    <article className="section columns is-paddingless is-mobile">
                        <section className="column is-three-fifths is-offset-one-fifth">
                            <h4 className="title is-4 has-text-centered">{this.state.user.name}</h4>
                            <div className="tabs is-centered is-medium">
                                {this.state.detailsTab ? 
                                <ul> <li className="is-active" onClick={this.detailsDisplay}><a>Details</a></li> <li onClick={this.portfolioDisplay}><a>Portfolio</a></li> </ul>
                                : 
                                <ul> <li onClick={this.detailsDisplay}><a>Details</a></li> <li className="is-active" onClick={this.portfolioDisplay}><a>Portfolio</a></li> </ul>
                                }
                            </div>
                            
                            {this.state.detailsTab ?
                            <SingleUserDetails singleUser={this.state.user}/>
                            :
                            <SingleUserPortfolio singleUser={this.state.user}/>
                            }
                        </section>
                    </article>
                </div>
                );
        }
    }
}
export default SingleUser;*/