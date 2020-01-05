import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieShow = props => {

    const [movie, setMovie] = useState([]); 
    
    useEffect(() => {
        if(props.movieId != null && props.movieId){
            axios.get('http://localhost:8888/api/movies/'+props.movieId, null, {
                Accept : 'application/json'
            }).then(response => {
                setMovie(response.data);
            }).catch(error => {
              //TO DO:global error caching 
            });
        }
    },[props.movieId])

    //console.log(movie);

    return(
      <div>
          {
              movie.main_image ? 
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            
                            <br/>
                            <br/>

                        <img src={'http://localhost:8888/storage/movies/' + movie.main_image} alt={movie.main_image} style={{borderRadius: 10}} className="img-fluid"/>
                        </div>

                        <div className="col-9">

                        <div className="container">
        
            <div className="col-lg-8 order-lg-2">
                
                <div className="tab-content py-4">
                    <div className="tab-pane active" id="profile">
                        <h6 className="mb-3">{movie.movie} <small><a href="garden-category.html" title=""><i className="fa fa-eye"></i>  {movie.views} </a></small></h6>
                        <div className="row">
                            <div className="col-md-6">
                                <h6>About</h6>
                                <p>
                                    {movie.description}
                                </p>
                                <h6>Language</h6>
                                <p>
                                    {movie.language}
                                </p>
                                <h6>Added by</h6>
                                <p>
                                    {movie.user.name}
                                </p>
                                <h6>Company :</h6>
                                <p>
                                    {movie.company.name}
                                    <br/>
                                    <br/>
                                    {movie.company.co_details}
                                    
                                </p>
                            </div>
                            
                            <div className="col-md-12">
                            <h5 className="mt-2"><span className="fa fa-clock-o ion-clock "></span> Premiere: {movie.release_date}</h5>
                            <h5 className="mt-2"><span className="fa fa-clock-o ion-clock "></span> Lenght of movie: {movie.time_in_secounds} minutes</h5>

                                <table className="table table-sm table-hover table-striped">
                                    
                                    <tbody>                                    
                                        
                                        <tr>
                                            <td>
                                                <strong>Map actors and genres</strong> 
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                        </div>
                    </div>

                        </div>
                    </div>
                </div>
                </div>
                
                : null
          }
        
      </div>  
    );
}

export default MovieShow;
