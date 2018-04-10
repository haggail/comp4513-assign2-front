import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import SingleCompanySummary from './SingleCompanySummary.js';
import SingleCompanyList from './SingleCompanyList.js';

import axios from 'axios';

class SingleCompany extends Component {
    constructor(props) {
        super(props);
        this.state={
            summaryTab: true,
            path: ["Home", "Companies", "Single Company"]
        }
    }
    
    componentDidMount() {
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/companies/' + this.props.match.params.id)
        .then(response => {
            this.setState({foundCompany: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    
	summaryDisplay() {
        this.setState({
           summaryTab: true
        });
    }
    
    listDisplay() {
        this.setState({
           summaryTab: false
        });
    }
    
    render() {
        if (! this.state.foundCompany || this.state.foundCompany === 0) {
            return null;
        } else {
            return(
                <div>
                    <Breadcrumb links={this.state.path}/>
                    <article className="section columns is-mobile is-paddingless">
                        <section className="column is-three-fifths is-offset-one-fifth has-text-centered">
                            <img className="company-image" src={'/logos/' + this.state.foundCompany[0].symbol + '.svg'} alt="Company Symbol" />
                            <div className="tabs is-centered is-medium">
                                    {this.state.summaryTab ? 
                                    <ul> <li className="is-active" onClick={this.summaryDisplay.bind(this)}><a>Summary</a></li> <li onClick={this.listDisplay.bind(this)}><a>List</a></li> </ul>
                                    : 
                                    <ul> <li onClick={this.summaryDisplay.bind(this)}><a>Summary</a></li> <li className="is-active" onClick={this.listDisplay.bind(this)}><a>List</a></li> </ul>
                                    }
                            </div>
                            {this.state.summaryTab ?
                                <SingleCompanySummary singleCompany= {this.state.foundCompany} />
                                :
                                <SingleCompanyList singleCompany={this.state.foundCompany} />
                                }
                        </section>
                    </article>
                </div>
            );
        }
    }
}
export default SingleCompany;