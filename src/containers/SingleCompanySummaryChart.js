import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class SingleCompanySummaryChart extends Component {
    constructor(props) {
        super(props);
        this.state = {average: props.data};
    } 
    
    render() {
        if (!this.state.average) {
            return null;
        } else {
            return (
                <BarChart width={700} height={400} data={this.state.average}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="_id"/>
                <YAxis/>
                <Bar dataKey="average" fill="#8884d8" />
                </BarChart>
            );
        }
    }
}
export default SingleCompanySummaryChart;