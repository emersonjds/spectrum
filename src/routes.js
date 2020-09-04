import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Opportunities from "./Pages/Opportunities";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/opportunities" exact={true} component={Opportunities} />

        {/* <Route path="/sobre" component={AutistArea} /> */}
      </Switch>
    </BrowserRouter>
  );
}
