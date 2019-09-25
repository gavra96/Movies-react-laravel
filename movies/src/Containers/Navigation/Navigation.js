import React from 'react';

const Navigation = props => {

    return(
    <header className="header">
        <div className="container">
            <nav className="navbar navbar-inverse navbar-toggleable-md">
                
                <div className="collapse navbar-collapse justify-content-md-center" id="Forest Timemenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link color-green-hover" href="garden-index.html">Home</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    );
}
export default Navigation;