import React, { Suspense, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './Hoc/Layout/layout';
import FirstPage from './Containers/FirstPage/FirstPage';
import * as actions from './store/actions';


const Logout = React.lazy(()=> {
  return import('./Containers/Auth/Logout/Logout');
});



const App = props => {

  useEffect( ()=>{
    props.authAttempt();
  }, []);

  let routes = (
    <Switch>
      <Route path="/" exact component={FirstPage} />
      <Redirect to="/" />
    </Switch>
  );
  
  if ( props.isAuthenticated ) {
    routes = (
      <Switch>
        <Route path="/logout" render={() => <Logout />} />
        <Route path="/" exact component={FirstPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    

  );
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return{
    authAttempt : () => dispatch(actions.authAttempt())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
