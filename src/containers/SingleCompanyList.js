import React, { Component } from 'react';
import SingleCompanyListItem from '../containers/SingleCompanyListItem.js';

import axios from 'axios';

class SingleCompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: props.singleCompany,
        }
    }
    
        
    
    getMonthlyData(selected) {
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/monthly/' + this.state.company[0].symbol + '/' + selected.target.value)
        .then(response => {
            this.setState({monthlyPrices: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    
    }
    
    
    render() {
        return (
            <section className="section is-paddingless">
            <h4>Monthly Data</h4>
            <div className="field">
                <p className="control">
                    <span className="select is-fullwidth" >
                        <select name='monthSelect' onChange={this.getMonthlyData.bind(this)}>
                            <option selected disabled>Select a Month</option>
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
                    </span>
                </p>
            </div>

            {this.state.monthlyPrices ?
            <table className="table is-hoverable is-fullwidth is-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.monthlyPrices.map((data) => {
                        return(
                            <SingleCompanyListItem identifier={data.date} open={data.open} high={data.high} low={data.low} close={data.close} />
                        )}
                    )}
                </tbody>
            </table>
            :
            <p>No data found. Please select a month</p>
            }

        </section>
        );
    }
}
export default SingleCompanyList;