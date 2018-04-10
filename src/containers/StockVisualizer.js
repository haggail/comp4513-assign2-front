import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import StockVisualizerList from '../containers/StockVisualizerList.js';
import StockVisualizerChart from '../containers/StockVisualizerChart.js';

import axios from 'axios';

class StockVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state={path: ["Home", "Stock Visualizer"],
                    test: [{name: 1, uv: 4000, pv: 2400, amt: 2400},
                            {name: 2, uv: 3000, pv: 1398, amt: 2210},
                            {name: 3, uv: 2000, pv: 9800, amt: 2290},
                            {name: 2, uv: 2780, pv: 3908, amt: 2000},
                            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
                            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},]
                   }
    }
    
    componentDidMount() {
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/companies')
        .then(response => {
            let sortedStocks = response.data;
            sortedStocks.sort(function(a, b){
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            })
            this.setState({stocks: sortedStocks});
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    
    getMonthlyData1(selected) {
        this.setState({opt1: selected.target.value})
        
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/monthly/' + selected.target.value + '/' + this.state.month)
        .then(response => {
            this.setState({firstStock: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    getMonthlyData2(selected) {
        this.setState({opt2: selected.target.value})
        
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/monthly/' + selected.target.value + '/' + this.state.month)
        .then(response => {
            this.setState({secondStock: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    getMonthlyData3(selected) {
        this.setState({opt3: selected.target.value})

        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/monthly/' + selected.target.value + '/' + this.state.month)
        .then(response => {
            this.setState({thirdStock: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    
    selectMonth(selected) {
        this.setState({month: selected.target.value})
    }
    
    render() {
        if (! this.state.stocks || this.state.stocks === 0) {
            return null;
        } else {
            console.log(this.state.firstStock)
            return (
                <div>
                    <Breadcrumb links={this.state.path}/>
                    <article className="section columns is-paddingless is-mobile">
                        <section className="column is-three-fifths is-offset-one-fifth">
                            <div className="field">
                                <p className="control">
                                    <span className="select">
                                        <select name='monthSelect' onChange={this.selectMonth.bind(this)}>
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
                            {this.state.month ?
                                <div>
                                    <StockVisualizerList data={this.state.stocks} getMonthlyData={this.getMonthlyData1.bind(this)}/>
                            
                                    <StockVisualizerList data={this.state.stocks} getMonthlyData={this.getMonthlyData2.bind(this)}/>

                                    <StockVisualizerList data={this.state.stocks} getMonthlyData={this.getMonthlyData3.bind(this)}/>
                                    
                                </div>
                                :
                                    <p>Please select a month</p>
                            }
                        
                                <StockVisualizerChart data1={this.state.firstStock} data2={this.state.secondStock} data3={this.state.thirdStock} />

                        </section>
                                
                    </article>
                </div>
            );
        }
    }
}
                            
export default StockVisualizer;