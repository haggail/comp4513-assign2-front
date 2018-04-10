import React, { Component } from 'react';

import axios from 'axios';

class BrowsePortfolioList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            sortSym: true, reverseSym: false,
            sortName: false, reverseName: false,
            sortOwned: false, reverseOwned: false,
            sortCurrent: false, reverseCurrent: false
        }
    }
    /*
    componentDidMount() {
        axios.get('https://wiggly-kitty-services.herokuapp.com/api/portfolios/' + this.state.user)
        .then(response => {
            this.setState({portfolio: response.data})

            var companies = [];
            var prices = [];
            this.state.portfolio.map((entry) => {
                
                axios.get('https://wiggly-kitty-services.herokuapp.com/api/companies/' + entry.symbol)
                .then(response => {
                    companies.push(response.data[0])
                })
                .catch(error => {
                    alert('Error with api call ... error=' + error);
                });
                axios.get('https://wiggly-kitty-services.herokuapp.com/api/prices/recent/' + entry.symbol)
                .then(response => {
                    prices.push(response.data[0])
                
                })
                .catch(error => {
                    alert('Error with api call ... error=' + error);
                });
            })
            this.setState({company: companies})
            this.setState({currentPrice: prices})
                        console.log(this.state.portfolio)

            console.log(this.state.company)
            console.log(this.state.currentPrice)
            var newList = []
            for (let i=0;i<this.state.portfolio.length;i++) {
                newList.push({symbol: this.state.portfolio[i].symbol, name: this.state.company[i].name, owned: this.state.portfolio[i].owned, value: this.state.portfolio[i].owned * this.state.currentPrice[i].close})
        }
        this.setState({masterList: newList})
        console.log(this.state.masterList)

            
            
            
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    
    createList() {
        
    }
    */
    sortBySymbol() {
        this.setState({sortName: false, reverseName: false, sortOwned: false, reverseOwned: false, sortCurrent: false, reverseCurrent: false});
        
        let toBeSorted = this.state.masterList;
        toBeSorted.sort(function(a, b){
            var x = a.symbol.toLowerCase();
            var y = b.symbol.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        
        if (this.state.sortSym) {
            this.setState({masterList: toBeSorted.reverse(), sortSym: false, reverseSym: true});
        } else {
            this.setState({masterList: toBeSorted, sortSym: true, reverseSym: false});
        }
    }
    
    sortByName() {
        this.setState({sortSym: false, reverseSym: false, sortOwned: false, reverseOwned: false, sortCurrent: false, reverseCurrent: false});
        
        let toBeSorted = this.state.masterList;
        toBeSorted.sort(function(a, b){
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        
        if (this.state.sortName) {
            this.setState({masterList: toBeSorted.reverse(), sortName: false, reverseName: true});
        } else {
            this.setState({masterList: toBeSorted, sortName: true, reverseName: false});
        }
    }
    
    sortByOwned() {
        this.setState({sortSym: false, reverseSym: false, sortName: false, reverseName: false, sortCurrent: false, reverseCurrent: false});
        
        let toBeSorted = this.state.masterList;
        toBeSorted.sort(function(a, b){
            return b.amount-a.amount;
        });
        
        if (this.state.sortOwned) {
            this.setState({masterList: toBeSorted.reverse(), sortOwned: false, reverseOwned: true});
        } else {
            this.setState({masterList: toBeSorted, sortOwned: true, reverseOwned: false});
        }
    }
    
    sortByCurrent() {
        this.setState({sortSym: false, reverseSym: false, sortName: false, reverseName: false, sortOwned: false, reverseOwned: false});
        
        let toBeSorted = this.state.masterList;
        toBeSorted.sort(function(a, b){
            return b.amount-a.amount;
        });
        
        if (this.state.sortCurrent) {
            this.setState({masterList: toBeSorted.reverse(), sortCurrent: false, reverseCurrent: true});
        } else {
            this.setState({masterList: toBeSorted, sortCurrent: true, reverseCurrent: false});
        }
    }
    
    sortByOwned() {
        this.setState({sortSym: false, reverseSym: false, sortName: false, reverseName: false, sortCurrent: false, reverseCurrent: false});
        
        let toBeSorted = this.state.masterList;
        toBeSorted.sort(function(a, b){
            return b.amount-a.amount;
        });
        
        if (this.state.sortAmount) {
            this.setState({masterList: toBeSorted.reverse(), sortOwned: false, reverseOwned: true});
        } else {
            this.setState({masterList: toBeSorted, sortOwned: true, reverseOwned: false});
        }
    }
    
    render() {
        if (!this.state.currentPrice) {
            return null
        } else {
            return (
                <section className="section is-paddingless">
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

                    </tbody>
                </table>
                :
                <p>No data found. Please select a month</p>
                }

            </section>
            );
        }   
    }   
}

export default BrowsePortfolioList;