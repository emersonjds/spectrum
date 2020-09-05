import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Opportunities from "./Pages/Opportunities";
import VacancyArea from "./Pages/Vacancy";
import Professional from "./Pages/Professional";
import Courses from "./Pages/Courses";
import EnterpriseArea from "./Pages/EnterpriseArea";
import Partners from "./Pages/Partners";
import Profile from "./Pages/Profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/opportunities" exact={true} component={Opportunities} />
        <Route path="/vacancies" exact={true} component={VacancyArea} />
        <Route path="/professional" exact={true} component={Professional} />
        <Route path="/courses" exact={true} component={Courses} />
        <Route path="/enterprises" exact={true} component={EnterpriseArea} />
        <Route path="/profile" exact={true} component={Profile} />
        <Route path="/enterpriseArea" exact={true} component={Partners} />
      </Switch>
    </BrowserRouter>
  );
}
