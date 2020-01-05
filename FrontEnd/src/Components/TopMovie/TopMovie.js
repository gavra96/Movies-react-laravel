import React, { useState } from 'react';
import Modal from '../../Containers/UI/Modal/Modal';
import MovieShow from '../../Containers/MovieShow/MovieShow';

const TopMovie = props => {
    const [modal, setModal] = useState(false);

    return(
            <div className="left-side">
                <div className="masonry-box post-media" onClick={()=> {setModal(true)}}>
                     <img src={'http://localhost:8888/storage/movies/'+ props.movie.main_image} alt={props.movie.main_image} className="img-fluid" />
                     <div className="shadoweffect">
                        <div className="shadow-desc">
                            <div className="blog-meta">
                                <span className="bg-aqua"><a href="blog-category-01.html" >Gardening</a></span>
                                <h4><a href="#">{props.movie.movie}</a></h4>
                                <small><a href="#" >{props.movie.release_date}</a></small>
                                <small><a  href="#">by {props.movie.user.name}</a></small>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Modal open={modal} close={() => setModal(false)} title="" >
                    <MovieShow movieId={props.movie.id} />
                </Modal>
            </div>
    );

}
export default TopMovie;





