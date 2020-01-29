import React, { useState } from 'react';
import MovieShow from '../../MovieShow/MovieShow';
import Modal from '../../UI/Modal/Modal';


const Movies = props => {

    const [modal, setModal] = useState(false);


    const genres = props.moviedata.genres.map(genre => {
        return <span className="bg-aqua" key={genre.id}>{genre.name}</span> 
    });


    return(
    <div className="page-wrapper" > 
        <div className="blog-list clearfix">
        <div className="blog-box row">
            <div className="col-md-4">
                <div className="post-media">
                
                        <img src={'http://localhost:8888/storage/movies/' + props.moviedata.main_image} alt={props.moviedata.main_image} className="img-fluid" style={{borderRadius: 10}}/>
                        <div className="hovereffect"></div>
                    
                </div>
            </div>

            <div className="blog-meta big-meta col-md-8">
                {genres}
                <a href="#" title=""><h4 onClick={() => {setModal(true)}}>{props.moviedata.movie} </h4></a>
                <p>{props.moviedata.description}</p>
                <small><a href="garden-category.html" title=""><i className="fa fa-eye"></i>{props.moviedata.views} </a></small>
                <small><a href="garden-single.html" title="">{props.moviedata.release_date}</a></small>
                <small><a href="#" title="">by {props.moviedata.user.name}</a></small>
            </div>
        </div>

        <hr className="invis"/>
        <Modal open={modal} close={() => setModal(false)} title="" >
              <MovieShow movieId={props.moviedata.id} />
        </Modal>
        
        </div>
    </div>
    );
}

export default Movies;