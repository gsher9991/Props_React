import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import FlowersDetails from "../components/FlowersDetails";
import Data from "../Data";

function Router() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={"/"} exact component={() => <Data />} />
          <Route
            path={"/flowersdetails"}
            exact
            component={() => <FlowersDetails />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Router;
