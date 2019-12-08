import React from 'react';

const TopMovie = props => {
    return(
            <div className="left-side">
                <div className="masonry-box post-media">
                     <img src="upload/garden_cat_01.jpg"  className="img-fluid"/>
                     <div className="shadoweffect">
                        <div className="shadow-desc">
                            <div className="blog-meta">
                                <span className="bg-aqua"><a href="blog-category-01.html" >Gardening</a></span>
                                <h4><a href="garden-single.html" >How to choose high quality soil for your gardens</a></h4>
                                <small><a  >21 July, 2017</a></small>
                                <small><a  >by Amanda</a></small>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    );

}
export default TopMovie;





