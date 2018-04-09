import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import axios from 'axios';

class SingleCompany extends Component {
    constructor(props) {
        super(props);
        this.state={
            foundData: [],
            path: ["Home", "Companies", "Single Company"]
        }
    }
	
	componentDidMount() {
        axios.get('https://wiggly-kitties-services.herokuapp.com/api/companies/' + this.props.match.params.id)
        .then(response => {
            this.setState({foundCompany: response.data});
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
	
	summaryDisplay=()=> {
        this.setState({
           summaryDisplay: true
        });
    }
    
    listDisplay=()=> {
        this.setState({
           summaryDisplay: false
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
                                {this.state.summaryDisplay ? 
                                <ul> <li className="is-active" onClick={this.summaryDisplay}><a>Summary</a></li> <li onClick={this.listDisplay}><a>List</a></li> </ul>
                                : 
                                <ul> <li onClick={this.summaryDisplay}><a>Summary</a></li> <li className="is-active" onClick={this.listDisplay}><a>List</a></li> </ul>
                                }
                        </div>
                        <hr/>
                        <h4 className="title is-4">{this.state.stock.name}</h4>
                        <p>Symbol: {this.state.stock.symbol}</p>
                        <p>Sector: {this.state.stock.sector}</p>
                        <p>Sub-Industry: {this.state.stock.subIndustry}</p>
                        <p>Address: {this.state.stock.address}</p>*/
                    </section>
                </article>
            </div>
            );
    }
}
export default SingleCompany;