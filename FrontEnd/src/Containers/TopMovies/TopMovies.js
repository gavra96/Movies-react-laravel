import React from 'react';
import TopMovie from '../../Components/TopMovie/TopMovie';

const TopMovies = props => {

    return(<section className="section first-section">
    <div className="container-fluid">
        <div className="masonry-blog clearfix">
            <TopMovie/>
            <TopMovie/>
            <TopMovie/>
        </div>
    </div>
</section>);
}
export default TopMovies;




