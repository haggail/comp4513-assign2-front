import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import SingleCompanyList from './SingleCompanyList.js';
import SingleCompanySummary from './SingleCompanySummary.js';

import axios from 'axios';
import companyList from '../companies.json';

class SingleCompany extends Component {
    constructor(props) {
        super(props);
        this.state={
            foundCompany: this.findCompany(),
            path: ["Home", "Companies", "Single Company"]
        }
    }
    
    findCompany() {
        let foundComp = companyList.find(n=>n.symbol === this.props.match.params.id);
        return foundComp;
    }
	
	listDisplay=()=> {
        this.setState({
           listTab: true
        });
    }
    
    summaryDisplay=()=> {
        this.setState({
           listTab: false
        });
    }
    
    render() {
        return(
            <div>
                <Breadcrumb links={this.state.path}/>
                <article className="section columns is-mobile is-paddingless">
                    <section className="column is-three-fifths is-offset-one-fifth has-text-centered">
                        <img className="company-image" src={'/logos/' + this.state.foundCompany.symbol + '.svg'} alt="Company Symbol" />
                        <div className="tabs is-centered is-medium">
                                {this.state.listTab ? 
                                <ul> <li onClick={this.summaryDisplay}><a>Summary</a></li> <li className="is-active" onClick={this.listDisplay}><a>List</a></li> </ul>
                                : 
                                <ul> <li className="is-active" onClick={this.summaryDisplay}><a>Summary</a></li> <li onClick={this.listDisplay}><a>List</a></li> </ul>
                                }
                        </div>
                        
                        {this.state.listTab ?
                            <SingleCompanyList singleCompany={this.state.foundCompany}/>
                            :
                            <SingleCompanySummary singleCompany={this.state.foundCompany}/>
                            }
                    </section>
                </article>
            </div>
            );
    }
}
export default SingleCompany;