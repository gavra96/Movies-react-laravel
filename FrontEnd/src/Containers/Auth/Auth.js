import React, { useState } from 'react';
import * as actions from '../../store/actions'
import { connect } from 'react-redux';
 
const Auth = props => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const submitLoginHandler = event => {
        event.preventDefault();
        props.onAuth(email, password);
    }
    return(
    
        <div className="col-lg-8 offset-lg-2">
            <form onSubmit={submitLoginHandler} className="form-wrapper">
                <p>Login:</p>
                <input type="text" 
                    className="form-control" 
                    placeholder="Your username"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                <input type="password"
                    className="form-control"
                    placeholder="Your password"
                    value={password}
                    onChange={event => setPassword(event.target.value)} 
                  />
                <button type="submit" className="btn btn-primary">Login <i className="fa fa-envelope-open-o"></i></button>
            </form>
        </div>
    
);
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth : (email, password) => dispatch(actions.auth(email,password))
    }
}

export default connect(null, mapDispatchToProps)(Auth);

