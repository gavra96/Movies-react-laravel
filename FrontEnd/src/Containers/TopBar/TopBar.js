import React from 'react';
import MovieSearch from '../../Components/MovieSearch/MovieSearch';

const TopBar = () => {


    return(
        <div className="topbar-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-6 hidden-xs-down">

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        
                        <div className="widget">
                            <MovieSearch/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;