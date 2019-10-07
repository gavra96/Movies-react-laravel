import React, { Suspense } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Layout from './Hoc/Layout/layout';
import FirstPage from './Containers/FirstPage/FirstPage';



const Auth = React.lazy(()=> {
  return import('./Containers/Auth/Auth');
});

let routes = (
  <Switch>
    <Route path="/auth" render={() => <Auth />} />
    <Route path="/" exact component={FirstPage} />
    <Redirect to="/" />
  </Switch>
);

const App =() => {
  return (
    
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    

  );
}

export default withRouter(App);
