import React from 'react';
import MovieSearch from '../../Components/MovieSearch/MovieSearch';


const MainSideBar = props => {

    return(
<div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="sidebar">
                            <MovieSearch/>
                            <br/>

                            <div className="widget">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="blog-list-widget">
                                    <div className="list-group">
                                        <a href="garden-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src="upload/garden_sq_09.jpg" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">5 Beautiful buildings you need to before dying</h5>
                                                <small>12 Jan, 2016</small>
                                            </div>
                                        </a>

                                        <a href="garden-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src="upload/garden_sq_06.jpg" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">Let's make an introduction for creative life</h5>
                                                <small>11 Jan, 2016</small>
                                            </div>
                                        </a>

                                        <a href="garden-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 last-item justify-content-between">
                                                <img src="upload/garden_sq_02.jpg" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">Did you see the most beautiful sea in the world?</h5>
                                                <small>07 Jan, 2016</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            

                            

                            <div className="widget">
                                <h2 className="widget-title">Popular Categories</h2>
                                <div className="link-widget">
                                    <ul>
                                        <li><a href="#">Gardening <span>(21)</span></a></li>
                                        <li><a href="#">Outdoor Living <span>(15)</span></a></li>
                                        <li><a href="#">Indoor Living <span>(31)</span></a></li>
                                        <li><a href="#">Shopping Guides <span>(22)</span></a></li>
                                        <li><a href="#">Pool Design <span>(66)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}
export default MainSideBar;