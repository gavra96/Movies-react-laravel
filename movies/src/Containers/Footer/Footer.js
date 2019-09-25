import React from 'react';

const Footer = props => {

    return(<footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <div className="widget">
                    <div className="footer-text text-center">
                        <a href="index.html"><img src="images/version/garden-footer-logo.png" alt="" className="img-fluid"/></a>
                        <p>Forest Time is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
                        

                        <hr className="invis"/>

                        <div className="newsletter-widget text-center">
                            <form className="form-inline">
                                <input type="text" className="form-control" placeholder="Enter your email address"/>
                                <button type="submit" className="btn btn-primary">Subscribe <i className="fa fa-envelope-open-o"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 text-center">
                <br/>
                <br/>
                <div className="copyright">&copy; Forest Time. Design: <a href="http://html.design">HTML Design</a>.</div>
            </div>
        </div>
    </div>
</footer>);
}

export default Footer;