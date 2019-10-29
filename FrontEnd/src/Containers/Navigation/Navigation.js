import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = props => {

    useEffect(()=>{

    }, [props.isAuthenticated])

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
                        {!props.isAuthenticated
                            ? <li className="nav-item">
                                <NavLink 
                                to="/auth" 
                                className="nav-link color-green-hover"
                                >Login</NavLink>
                              </li>


                            : 
                            <li className="nav-item">
                            <NavLink 
                            to="/logout" 
                            className="nav-link color-green-hover"
                            >Logout</NavLink>
                            </li>
                        
                        }


                        
                        
                        
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
  }
  
export default connect(mapStateToProps, null)(Navigation);
