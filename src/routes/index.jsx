import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ClientIndex from "../views/client-index";
import Home from "../views/home";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/store" component={Home} />
      <Route path="/" component={ClientIndex} />
    </Switch>
  </Router>
);

export default Routes;
