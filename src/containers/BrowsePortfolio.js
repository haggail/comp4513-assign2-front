import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import BrowsePortfolioSummary from './BrowsePortfolioSummary.js';
import BrowsePortfolioList from './BrowsePortfolioList.js';

import axios from 'axios';

class BrowsePortfolio extends Component {
    constructor(props) {
        super(props);
        this.state={
            summaryTab: true,
            path: ["Home", "Browse Portfolio"]
        }
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
        return(
            <div>
                <Breadcrumb links={this.state.path}/>
                <article className="section columns is-mobile is-paddingless">
                    <section className="column is-three-fifths is-offset-one-fifth has-text-centered">
                        <div className="tabs is-centered is-medium">
                                {this.state.summaryTab ? 
                                <ul> <li className="is-active" onClick={this.summaryDisplay.bind(this)}><a>Summary</a></li> <li onClick={this.listDisplay.bind(this)}><a>List</a></li> </ul>
                                : 
                                <ul> <li onClick={this.summaryDisplay.bind(this)}><a>Summary</a></li> <li className="is-active" onClick={this.listDisplay.bind(this)}><a>List</a></li> </ul>
                                }
                        </div>
                        {this.state.summaryTab ?
                            <BrowsePortfolioSummary singleCompany= {this.state.foundCompany} />
                            :
                            <BrowsePortfolioList singleCompany={this.state.foundCompany} />
                            }
                    </section>
                </article>
            </div>
        );
    }
}
export default BrowsePortfolio;