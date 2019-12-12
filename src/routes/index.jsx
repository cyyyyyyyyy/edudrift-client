import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ClinetIndex from '../views/client-index';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={ClinetIndex} />
    </Switch>
  </Router>
);

export default Routes;
