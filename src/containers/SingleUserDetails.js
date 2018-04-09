/*import React, { Component } from 'react';
import SingleUserAddress from '../containers/SingleUserAddress.js';
import SingleUserCompany from '../containers/SingleUserCompany.js';

class SingleUserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {user: props.singleUser, showAdd: false, showCom: false};
    }
    
    showAddress() {
        this.setState({showAdd: !this.state.showAdd});
    }
    
    showCompany() {
        this.setState({showCom: !this.state.showCom});
    }
    
    render() {
        return (
            <section className="section is-paddingless">
                <p className="subtitle is-6">ID: {this.state.user.id} <br/>
                                            Email: {this.state.user.email} <br/>
                                            Phone: {this.state.user.phone} <br/>
                                            Website: {this.state.user.website}
                </p>
            
            
                <article className="message is-primary">
                    <div className="message-header" onClick={this.showAddress.bind(this)}>
                        <p>Address</p>
                            {this.state.showAdd && 
                            <span className="icon has-text-white">
                                <i className="fas fa-minus"/>
                            </span>
                            }
                            {!this.state.showAdd && 
                            <span className="icon has-text-white">
                                <i className="fas fa-plus"/>
                            </span>
                            }
                    </div>
                    {this.state.showAdd ? <SingleUserAddress address={this.state.user.address} /> : null}
                </article>
                
                <article className="message is-primary">
                    <div className="message-header" onClick={this.showCompany.bind(this)}>
                        <p>Company</p>
                            {this.state.showCom && 
                            <span className="icon has-text-white">
                                <i className="fas fa-minus"/>
                            </span>
                            }
                            {!this.state.showCom && 
                            <span className="icon has-text-white">
                                <i className="fas fa-plus"/>
                            </span>
                            }
                    </div>
                    {this.state.showCom ? <SingleUserCompany company={this.state.user.company} /> : null}
                </article>
            </section>
        );

    }
}
export default SingleUserDetails;*/