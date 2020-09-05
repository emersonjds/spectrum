import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Opportunities from "./Pages/Opportunities";
import VacancyArea from "./Pages/Vacancy";
import Professional from "./Pages/Professional";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/opportunities" exact={true} component={Opportunities} />
        <Route path="/vacancies" exact={true} component={VacancyArea} />
        <Route path="/professional" exact={true} component={Professional} />

        {/* <Route path="/sobre" component={AutistArea} /> */}
      </Switch>
    </BrowserRouter>
  );
}
