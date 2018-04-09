import React, { Component } from 'react';
import CompanyListItem from '../containers/CompanyListItem.js';
import Breadcrumb from '../components/Breadcrumb.js';

import axios from 'axios';

class CompanyBrowser extends Component {
    constructor(props) {
        super(props);
        this.state={companies:[], path: ["Home", "Companies"]}
    }
    
    componentDidMount() {
        axios.get('https://fluffy-puppies-services.herokuapp.com/api/companies/')
        .then(response => {
            let sortedCompanies = response.data;
            sortedCompanies.sort(function(a, b){
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.setState({companies: sortedCompanies});
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    
    
    render() {
        if (! this.state.companies || this.state.companies.length === 0) {
            return null;
        } else {
            
            return (
                <div>
                <Breadcrumb links={this.state.path}/>
                <article className="section columns is-paddingless is-mobile">
                    <section className="column is-three-fifths is-offset-one-fifth">
                        <nav className="panel">
                            <h3 className="panel-heading">Companies</h3>
                                {this.state.companies.map( (company) => {
                                return (
                                    <CompanyListItem key={company.symbol} identifier={company.symbol}>
                                        {company.name}
                                    </CompanyListItem>
                                )
                            })
                            }
                        </nav>
                    </section>
                </article>
                </div>
                );
        }
    }
}

                            
export default CompanyBrowser;