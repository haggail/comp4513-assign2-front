import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CompanyListItem extends Component {
    render() {
        return (
                <Link to={"/companies/" + this.props.identifier} className = "panel-block">
                    <img className="company-thumbnail" src={'/logos/' + this.props.identifier + '.svg'} alt="Company Symbol" />
                    <span className="company-name">{this.props.children}</span>
                </Link>
            );
    }
}

export default CompanyListItem;