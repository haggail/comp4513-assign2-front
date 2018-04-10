import React, { Component } from 'react';
import axios from 'axios';

class BrowsePortfolioSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {company: props.singleCompany, load: props.loaded};
    } 
    
    componentDidMount() {
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/average/' + this.state.company[0].symbol)
        .then(response => {
            this.setState({averages: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    
    }
    
    render() {
        if (!this.state.averages) {
            return null;
        } else {}
            return (
                <section className="section is-paddingless">
                    <p className="subtitle is-6">
                        Name: {this.state.company[0].name} <br/>
                        Symbol: {this.state.company[0].symbol} <br/>
                        Sector: {this.state.company[0].sector} <br/>
                        Sub-Industry: {this.state.company[0].subindustry} <br/>
                        Date Added: {this.state.company[0].date_added} <br/>
                        Address: {this.state.company[0].address} <br/>
                    </p>

                </section>
            );
        }
}

export default BrowsePortfolioSummary;