import React, { Component } from 'react';
import SingleUserPortfolioItem from '../containers/SingleUserPortfolioItem.js';

import axios from 'axios';

class SingleCompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: props.singleCompany,
            monthlyPrices: [],
            month: null
        }
    }
    
    getData() {
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/monthly/AMZN/01' + this.props.match.params.id + '/' + this.state.month)
        .then(response => {
            this.setState({monthlyPrices: response.data});
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    
    getMonth(selected) {
        this.setState({month: selected.target.value})
        
    }
    
    
    render() {
        return (
            <section className="section is-paddingless">
            <select name='monthSelect' onChange={this.getMonth.bind(this)}>
                <option value='01'>January</option>
                <option value='02'>February</option>
                <option value='03'>March</option>
                <option value='04'>April</option>
                <option value='05'>May</option>
                <option value='06'>June</option>
                <option value='07'>July</option>
                <option value='08'>August</option>
                <option value='09'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select>
            {this.state.month != null &&
                this.getData()
            }
                <table className="table is-hoverable is-fullwidth is-striped">
                    <thead>
                        <tr>
                        
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </section>
            );
    }
}
export default SingleCompanyList;