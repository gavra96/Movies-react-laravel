import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Auth from '../Auth/Auth';
const Navigation = props => {
    
    const [authDialog ,setAuthDialog] = useState(false);

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
                            ? 
                            <li className="page-item">
                                <a className="page-link" onClick={() => {setAuthDialog(true)}}>Login</a>
                            </li>
                            


                            : 
                            <li className="nav-item">
                            <NavLink 
                            to="/logout" 
                            className="nav-link color-green-hover"
                            >Logout</NavLink>
                            </li>
                        
                        }
                        <Auth handleAuth={authDialog} close={()=>{setAuthDialog(false)}}></Auth>


                        
                        
                        
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
