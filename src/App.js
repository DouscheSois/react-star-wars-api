import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bottom from "./components/Bottom";
import People from "./components/people/People";
import People2 from "./components/people/People2";
import People3 from "./components/people/People3";
import People4 from "./components/people/People4";
import People5 from "./components/people/People5";
import People6 from "./components/people/People6";
import People7 from "./components/people/People7";
import People8 from "./components/people/People8";
import People9 from "./components/people/People9";
import Planets from "./components/Planets";
import Films from "./components/Films";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/people_1">
            <People />
          </Route>
          <Route exact path="/people_2">
            <People2 />
          </Route>
          <Route exact path="/people_3">
            <People3 />
          </Route>
          <Route exact path="/people_4">
            <People4 />
          </Route>
          <Route exact path="/people_5">
            <People5 />
          </Route>
          <Route exact path="/people_6">
            <People6 />
          </Route>
          <Route exact path="/people_7">
            <People7 />
          </Route>
          <Route exact path="/people_8">
            <People8 />
          </Route>
          <Route exact path="/people_9">
            <People9 />
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
    </>
  );
};

export default App;
