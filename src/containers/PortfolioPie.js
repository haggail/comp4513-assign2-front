import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';

class PortfolioPie extends Component {
    constructor(props) {
        super(props);
        this.state={pie: props.percentage}
    }
    
    render() {
        return(
            <PieChart
                slices={[
                { color: '#9B5CF0', value: 5 },
                { color: '#D6CCE3', value: 30 },
            ]}
    
        );
    }
}
                     
export default PortfolioPie;