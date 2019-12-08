import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie/Movie';
import Pager from '../UI/Pager/Pager';
const LatestMovies = props => {
    
    const [ movies , setMovies ] = useState([]);
    const [ res , setRes ] = useState(null);// response
    const [ page , setPage ] = useState(null);



    

    useEffect(()=>{
        let url = 'http://localhost:8888/api/movies';
        if(page !== null && page > 1){
            url += '?page='+page;
        }
        
        

        axios.get(url, null, {
            Accept : 'application/json'
        }).then(response => {
            setMovies(response.data.data);
            setRes(response.data);
        }).catch(error => {
            //
        });

    }, [page]);

    
    const rederMovies = movies.map(movie => {
        return <Movie key={movie.id} moviedata={movie} />
    });
   
    

    return(
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        
                        {rederMovies && rederMovies}
                        
                        <Pager res={res} setPage={setPage} />
                        
                    </div>
    );

}




export default LatestMovies;



