import React, { Component } from 'react';
import { LineChart, Line , CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';

class StockVisualizerChart extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() {
        if (this.props.data1) {
            var newData1 = {name: "Stock 1", data: []};
            this.props.data1.map((entry) => {
                newData1.data.push({date: entry.date, close: entry.close})
            });
        }
        if (this.props.data2) {
            var newData2 = {name: "Stock 2", data: []};
            this.props.data2.map((entry) => {
                newData2.data.push({date: entry.date, close: entry.close})
            });
        }
        if (this.props.data3) {
            var newData3 = {name: "Stock 3", data: []};
            this.props.data3.map((entry) => {
                newData3.data.push({date: entry.date, close: entry.close})
            });
        }

        return(
            <LineChart width={600} height={300} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            {newData1 &&
              <Line connectNulls={true} type="monotone" dataKey="close" data={newData1.data} name={newData1.name} key={newData1.name} stroke="#8884d8"/>
            }
            {newData2 &&
                <Line connectNulls={true} type="monotone" dataKey="close" data={newData2.data} name={newData2.name} key={newData2.name} stroke="#82ca9d"/>
            }
            {newData3 &&
              <Line connectNulls={true} type="monotone" dataKey="close" data={newData3.data} name={newData3.name} key={newData3.name} stroke="#F75D3C"/>
            }
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="date"/>
              <YAxis />
              <Tooltip/>
            </LineChart>
        );
    }
}

                     
export default StockVisualizerChart;