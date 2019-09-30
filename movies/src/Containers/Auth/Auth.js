import React from 'react';

const Auth = props => {
    return(
    
        <div className="col-lg-8 offset-lg-2">
            <form className="form-wrapper">
                <p>Login:</p>
                <input type="text" className="form-control" placeholder="Your username"/>
                <input type="password" className="form-control" placeholder="Your password"/>
                <button type="submit" className="btn btn-primary">Send <i className="fa fa-envelope-open-o"></i></button>
            </form>
        </div>
    
);
}

export default Auth;

