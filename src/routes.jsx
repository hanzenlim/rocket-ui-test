import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./views/Launches";

const Routes = () => (
  <Router>
    <Route exact path="/" component={Launches} />
    <Route path="/Launches" component={Launches} />
  </Router>
);

export default Routes;
