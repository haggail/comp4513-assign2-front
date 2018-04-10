import React, { Component } from 'react';

import axios from 'axios';

class StockVisualizerList extends Component {
    constructor(props) {
        super(props);
        this.state={content: props.data}
    }
    
    render() {
        if (! this.state.content || this.state.content === 0){
            return null;
        } else {
            return (
            <div className="field">
                <p className="control">
                    <span className="select">
                        <select name='stockList' onChange={this.props.getMonthlyData}>
                            <option selected>No Stock Selected</option>
                            {this.state.content.map((item) => {
                                return(
                                    <option value={item.symbol}>
                                    {item.symbol}&emsp;&emsp;&emsp;{item.name}
                                    </option>
                                );
                            })}
                        </select>
                    </span>
                </p>
            </div>
            );
        }
    }
}
             
export default StockVisualizerList;