import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "../src/components/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
