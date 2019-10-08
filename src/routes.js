import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ROUTES } from "./constants/routes";

import Home from "./components/Home";

const Routes = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.HOME} component={Home} exact />
    </Switch>
  </Router>
);

export default Routes;
