import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopMovie from '../../Components/TopMovie/TopMovie';

const TopMovies = props => {

    const [movies, setMovies] = useState([]); 
    
    useEffect(() => {
        
            axios.get('http://localhost:8888/api/top/movies/', null, {
                Accept : 'application/json'
            }).then(response => {
                setMovies(response.data);
                //console.log(response);
            }).catch(error => {
              //TO DO:global error caching 
            });
       
    },[])

    const renderMovies = movies.map(movie => {
        return <TopMovie movie={movie} key={movie.id} />
    })

    return(<section className="section first-section">
    <div className="container-fluid">
        <div className="masonry-blog clearfix">
        {renderMovies && renderMovies}
        </div>
    </div>
</section>);
}
export default TopMovies;




