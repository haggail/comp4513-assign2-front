import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

class StockVisualizerChart extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    makeDataSets() {
        for (let i = 0; i < 31; i++) {
            var day = this.props.data1[0].date.substring(8, 10);
            if (day=i) {
                
            }
            console.log(day);
            
        }
    }
        
    render() {
        if (!this.props.data1)
            return null;
        else {
            const data = this.props.data1;
            var newData = [];
            this.props.data1.map((entry) => {
                newData.push({"date": entry.date, "close": entry.close})
            })

            return (
                <LineChart 
                    width={600}
                    height={400}
                    data={newData}
                />

            );
        }
    }
        
}
                     
export default StockVisualizerChart;