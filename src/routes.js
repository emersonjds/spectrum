import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        {/* <Route path="/sobre" component={AutistArea} /> */}
      </Switch>
    </BrowserRouter>
  );
}
