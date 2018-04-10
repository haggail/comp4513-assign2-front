import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import StockVisualizerList from '../containers/StockVisualizerList.js';
import StockVisualizerChart from '../containers/StockVisualizerChart.js';
import StockVisualizerMonths from '../containers/StockVisualizerMonths.js';


import axios from 'axios';

class StockVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state={path: ["Home", "Stock Visualizer"]}
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
        this.setState({symbol1: selected.target.value})
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/monthly/' + selected.target.value + '/' + this.state.month)
        .then(response => {
            this.setState({firstStock: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    getMonthlyData2(selected) {
        this.setState({symbol2: selected.target.value})
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/monthly/' + selected.target.value + '/' + this.state.month)
        .then(response => {
            this.setState({secondStock: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    getMonthlyData3(selected) {
        this.setState({symbol3: selected.target.value})
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
        
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/monthly/' + this.state.symbol + '/' + selected.target.value)
        .then(response => {
            this.setState({firstStock: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
        
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/monthly/' + this.state.symbol2 + '/' + selected.target.value)
        .then(response => {
            this.setState({secondStock: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
        
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/monthly/' + this.state.symbol3 + '/' + selected.target.value)
        .then(response => {
            this.setState({thirdStock: response.data})
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    
    render() {
        if (! this.state.stocks || this.state.stocks === 0) {
            return null;
        } else {
            return (
                <div>
                    <Breadcrumb links={this.state.path}/>
                    <article className="section columns is-paddingless is-mobile">
                        <section className="column is-three-fifths is-offset-one-fifth">
                            <StockVisualizerMonths getMonth={this.selectMonth.bind(this)} />
                
                            {this.state.month ?
                                <div>
                                    <StockVisualizerList data={this.state.stocks} getMonthlyData={this.getMonthlyData1.bind(this)}/>
                                    <StockVisualizerList data={this.state.stocks} getMonthlyData={this.getMonthlyData2.bind(this)}/>
                                    <StockVisualizerList data={this.state.stocks} getMonthlyData={this.getMonthlyData3.bind(this)}/>
                                    
                                </div>
                                :
                                    <p>Please select a month</p>
                            }
                        
                            <StockVisualizerChart data1={this.state.firstStock} data2={this.state.secondStock} data3={this.state.thirdStock}/>

                        </section>
                                
                    </article>
                </div>
            );
        }
    }
}
                            
export default StockVisualizer;