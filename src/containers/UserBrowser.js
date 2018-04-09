/*import React, { Component } from 'react';
import UserListItem from '../containers/UserListItem.js';
import Breadcrumb from '../components/Breadcrumb.js';

import axios from 'axios';

class UserBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            path: ["Home", "Users"]
        };
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            let sortedUsers = response.data;
            sortedUsers.sort(function(a, b){
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            
            this.setState({users: sortedUsers});
        })
        .catch(error => {
            alert('Error with api call ... error=' + error);
        });
    }
    
    render() {
        if (! this.state.users || this.state.users.length === 0) {
            return null;
        } else {

            return (
                <div>
                    <Breadcrumb links={this.state.path}/>
                    <article className="section columns is-paddingless is-mobile">
                        <section className="column is-three-fifths is-offset-one-fifth">
                            <nav className="panel">
                                <h3 className="panel-heading">Users</h3>
                                {this.state.users.map( (user) => {
                                    return ( 
                                        <UserListItem key={user.id} identifier={user.id}>
                                            {user.name}
                                        </UserListItem>
                                    )
                                })
                                }
                            </nav>
                        </section>
                    </article>
                </div>
                );
        }
    }
}

export default UserBrowser;*/