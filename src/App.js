import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/pages/HomePage";
import Valid from "./components/ValidateVoter/ValidateVoterPage";
import ValidPass from "./components/ValidateVoter/EligibleVoterScreen";
import ValidFail from "./components/ValidateVoter/IneligibleVoterScreen";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/validate" component={Valid} />
        <Route exact path="/validpass" component={ValidPass} />
        <Route exact path="/validfail" component={ValidFail} />
      </Switch>
    </Fragment>
  );
}

export default App;
