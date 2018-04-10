import React, { Component } from 'react';
import axios from 'axios';
import PortfolioPie from '../containers/PortfolioPie.js';

class BrowsePortfolioSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {user: props.user}
    } 

    
    componentDidMount() {
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/portfolios/' + this.state.user)
            .then(response => {
                this.setState({portfolio: response.data})
            })
            .catch(error => {
                alert('Error with api call ... error=' + error);
            });
        
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/portfolios/owned/' + this.state.user)
            .then(response => {
                this.setState({portfolioOwned: response.data})
                var percentArr=[]
                this.state.portfolioOwned.map((entry)=> {
                percentArr.push(entry.percentOwned)
            })
                this.setState({percents: percentArr})

            })
            .catch(error => {
                alert('Error with api call ... error=' + error);
            });
    }
    
    
    render() {
        if (!this.state.portfolio || !this.state.portfolioOwned) {
            return null;
        } else {
            return (
                <section className="section is-paddingless">
                    <p className="subtitle is-6">
                        Number of Companies in Portfolio: {this.state.portfolio.length}
                    </p><br/>
                <h4>Percentage of Stocks Owned:</h4>
                <div className="pie-container">
                    <PortfolioPie percentages={this.state.percents}/>
                    />
                </div>

                </section>
            );
        }
    }
}

export default BrowsePortfolioSummary;