import React, { Component } from 'react';

class SingleCompanyListItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.identifier}</td>
                <td>{this.props.open}</td>
                <td>{this.props.high}</td>
                <td>{this.props.low}</td>
                <td>{this.props.close}</td>
            </tr>
            );
    }
}

export default SingleCompanyListItem;