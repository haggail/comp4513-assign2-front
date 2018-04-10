import React, { Component } from 'react';

class SingleCompanySummary extends Component {
    constructor(props) {
        super(props);
        this.state = {company: props.singleCompany, load: props.loaded};
        
    } 
    
    render() {
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
export default SingleCompanySummary;