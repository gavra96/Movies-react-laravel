import React from 'react';
import TopBar from './Containers/TopBar/TopBar';
import Navigation from './Containers/Navigation/Navigation';
import MainLogo from './Containers/MainLogo/MainLogo';
import TopMovies from './Containers/TopMovies/TopMovies';
import LatestMovies from './Containers/LatestMovies/LatestMovies';
import MainSideBar from './Containers/MainSideBar/MainSideBar';
import Footer from './Containers/Footer/Footer';
import Auth from './Containers/Auth/Auth';

function App() {
  return (
    <div className="wrapper">
        <TopBar/>
        <MainLogo/>
        <Navigation/>

        
        <Auth/>

        <TopMovies/>

        
        <section className="section wb">
            <div className="container">
                <div className="row">

                    {// ovde ide browserRouter iznad row 
                    }
                    
                    <LatestMovies/>
                    <MainSideBar/>
                </div>
            </div>
        </section>

        <Footer/>
    </div>

  );
}

export default App;
