import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBar = (props) => {
    return (
        <header>
            <nav className="navbar is-primary">
                <div className="navbar-brand">
                    <NavLink className="navbar-item" to={ {pathname:"/home"}} href="">
                        <span className="icon">
                            <i className="fab fa-lg fa-react"></i>
                        </span>
                    </NavLink>
                    <NavLink className="navbar-item" to={ {pathname:"/home"}} href="">
                        <h1 className="title">Assignment 2</h1>
                    </NavLink>
                    <div className="navbar-burger" onClick={()=>
                        document.querySelector('.navbar-menu').classList.toggle('is-active')
                    }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Menu</a>
                            <div className="navbar-dropdown is-right">
                                <NavLink className="navbar-item" to={ {pathname:"/home"}} href="">Home</NavLink>
                                <NavLink className="navbar-item" to={ {pathname:"/companies"}} href="">Users</NavLink>
                                <NavLink className="navbar-item" to={ {pathname:"/visualizer"}} href="">Stocks</NavLink>
                                <NavLink className="navbar-item" to={ {pathname:"/about"}} href="">About Us</NavLink>
                                <NavLink className="navbar-item" to={ {pathname:"/login"}} onClick={props.logout} href="">Logout</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        );
}

export default HeaderBar;