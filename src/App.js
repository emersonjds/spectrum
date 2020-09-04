import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import NavMenu from "./components/Nav";
import Routes from "./routes.js";

function App() {
  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
}

export default App;
