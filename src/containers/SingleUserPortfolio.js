/*import React, { Component } from 'react';
import SingleUserPortfolioItem from '../containers/SingleUserPortfolioItem.js';


class SingleUserPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {user: props.singleUser}
        this.state={
            stocks: this.createList(),
            sortSym: true, reverseSym: false,
            sortName: false, reverseName: false,
            sortAmount: false, reverseAmount: false
        }
    }
    
    createList() {
        let filteredList = userStocks.filter(id=>id.userId === this.state.user.id);

        let stockDetails=[];
        for (let stock of filteredList) {
            let foundStock = stockList.find(n=>n.symbol === stock.symbol);
            stockDetails.push({symbol: foundStock.symbol, name: foundStock.name, amount: stock.amount});
        }
        return stockDetails;
    }
    
    sortBySymbol() {
        this.setState({sortName: false, reverseName: false, sortAmount: false, reverseAmount: false});
        
        let toBeSorted = this.state.stocks;
        toBeSorted.sort(function(a, b){
            var x = a.symbol.toLowerCase();
            var y = b.symbol.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        
        if (this.state.sortSym) {
            this.setState({stocks: toBeSorted.reverse(), sortSym: false, reverseSym: true});
        } else {
            this.setState({stocks: toBeSorted, sortSym: true, reverseSym: false});
        }
    }
    
    sortByName() {
        this.setState({sortSym: false, reverseSym: false, sortAmount: false, reverseAmount: false});
        
        let toBeSorted = this.state.stocks;
        toBeSorted.sort(function(a, b){
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        
        if (this.state.sortName) {
            this.setState({stocks: toBeSorted.reverse(), sortName: false, reverseName: true});
        } else {
            this.setState({stocks: toBeSorted, sortName: true, reverseName: false});
        }
    }
    
    sortByAmount() {
        this.setState({sortSym: false, reverseSym: false, sortName: false, reverseName: false});
        
        let toBeSorted = this.state.stocks;
        toBeSorted.sort(function(a, b){
            return b.amount-a.amount;
        });
        
        if (this.state.sortAmount) {
            this.setState({stocks: toBeSorted.reverse(), sortAmount: false, reverseAmount: true});
        } else {
            this.setState({stocks: toBeSorted, sortAmount: true, reverseAmount: false});
        }
    }

    render() {
        return (
            <section className="section is-paddingless">
                <table className="table is-hoverable is-fullwidth is-striped">
                    <thead>
                        <tr>
                            {this.state.sortSym &&
                                <th onClick={this.sortBySymbol.bind(this)}>Symbol <i className="fas fa-caret-down"/></th>
                            }
                            {this.state.reverseSym &&
                                <th onClick={this.sortBySymbol.bind(this)}>Symbol <i className="fas fa-caret-up"/></th>
                            }
                            {!this.state.sortSym && !this.state.reverseSym &&
                                <th onClick={this.sortBySymbol.bind(this)}>Symbol</th>
                            }
                            
                            {this.state.sortName &&
                                <th onClick={this.sortByName.bind(this)}>Name <i className="fas fa-caret-down"/></th>
                            }
                            {this.state.reverseName &&
                                <th onClick={this.sortByName.bind(this)}>Name <i className="fas fa-caret-up"/></th>
                            }
                            {!this.state.sortName && !this.state.reverseName &&
                                <th onClick={this.sortByName.bind(this)}>Name </th>
                            }
                            
                            {this.state.sortAmount &&
                                <th onClick={this.sortByAmount.bind(this)}>Amount <i className="fas fa-caret-down"/></th>
                            }
                            {this.state.reverseAmount &&
                                    <th onClick={this.sortByAmount.bind(this)}>Amount <i className="fas fa-caret-up"/></th>
                            }
                            {!this.state.sortAmount && !this.state.reverseAmount &&
                                    <th onClick={this.sortByAmount.bind(this)}>Amount </th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.stocks.map( (stock) => {
                            return(
                                <SingleUserPortfolioItem identifier={stock.symbol} symbol={stock.symbol} amount={stock.amount} >
                                    {stock.name}
                                </SingleUserPortfolioItem>
                                )
                        })
                    }
                    </tbody>
                </table>
            </section>
            );
    }
}
export default SingleUserPortfolio;*/