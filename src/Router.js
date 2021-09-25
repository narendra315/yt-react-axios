import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Detail from "./Detail";

const Router = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/dashboard" exact={true} component={Dashboard} />
        <Route path="/detail/:id" exact={true} component={Detail} />
      </Switch>
    </React.Fragment>
  );
};

export default Router;
