import React, { Component } from 'react';

class SingleCompanySummary extends Component {
    constructor(props) {
        super(props);
        this.state = {company: props.singleCompany};
    }
    
    render() {
        return (
            <section className="section is-paddingless">
                <p className="subtitle is-6">Name: {this.state.company.name} <br/>
                                            Symbol: {this.state.company.symbol} <br/>
                                            Sector: {this.state.company.sector} <br/>
                                            Sub-Industry: {this.state.company.subindustry} <br/>
                                            Date Added: {this.state.company.date_added} <br/>
                                            Address: {this.state.company.address} <br/>
                </p>
            </section>
        );

    }
}
export default SingleCompanySummary;