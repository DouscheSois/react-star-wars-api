import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bottom from "./components/Bottom";
import People from "./components/People";
import Planets from "./components/Planets";
import Films from "./components/Films";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/planets">
            <Planets />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
        </Switch>
      </Router>
      <Bottom />
    </Fragment>
  );
};

export default App;
