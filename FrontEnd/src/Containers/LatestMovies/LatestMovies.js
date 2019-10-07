import React from 'react';


const LatestMovies = props => {

    return(
<div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-list clearfix">
                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="garden-single.html" title="">
                                                <img src="upload/garden_sq_01.jpg" alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                        <span className="bg-aqua"><a href="garden-category.html" title="">Indoor</a></span>
                                        <h4><a href="garden-single.html" title="">The best twenty plant species you can look at at home</a></h4>
                                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                        <small><a href="garden-category.html" title=""><i className="fa fa-eye"></i> 1887</a></small>
                                        <small><a href="garden-single.html" title="">11 July, 2017</a></small>
                                        <small><a href="#" title="">by Matilda</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                
                            </div>
                        </div>

                        

                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
    );

}

export default LatestMovies;


