import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcrumb = (props) => {
    return (
        <nav className="breadcrumb is-centered">
            <ul>
            
            {props.links.map( (link, ind)=> {
                if (props.links.length === ind+1) {
                return(
                        <li className="is-active"><NavLink to={"/" + link}>{link}</NavLink></li>
                    )
                } else {
                    return(
                        <li><NavLink to={"/" + link}>{link}</NavLink></li>
                    )
                }
                })
            }
            </ul>
        </nav>
        );
}

export default Breadcrumb;