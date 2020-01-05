import React from 'react';
import {withRouter} from 'react-router-dom';
import Navigation from '../../Containers/Navigation/Navigation';
import MainLogo from '../../Containers/MainLogo/MainLogo';
import Footer from '../../Containers/Footer/Footer';



import TopMovies from '../../Containers/TopMovies/TopMovies';
const layout = props => {

  return (
    
    <div className="wrapper">
    
    
    <MainLogo/>
    <Navigation/>

    {
        props.location.pathname === "/" ? <TopMovies/> : null 
    }

    
    
    
    <section className="section wb">
        <div className="container">
            <div className="row">

                {props.children}
                
                
            </div>
        </div>
    </section>

    <Footer/>
</div>
    
  );
};


export default withRouter(layout);
