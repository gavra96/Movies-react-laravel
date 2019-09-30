import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = props => {

    return(
    <header className="header">
        <div className="container">
            <nav className="navbar navbar-inverse navbar-toggleable-md">
                
                <div className="navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink 
                            to="/" 
                            className="nav-link color-green-hover"
                            >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            to="/auth" 
                            className="nav-link color-green-hover"
                            >Login</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    );
}
export default Navigation;