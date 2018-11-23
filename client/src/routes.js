/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';

import App from '@containers/App';
import Landing from '@containers/Landing';
import Dashboard from '@containers/Dashboard';
import Auth from '@containers/Auth';

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/auth" component={Auth} />
    </Switch>
  </App>
);

export default Routes;
