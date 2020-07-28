import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Bottom from "./components/Bottom";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Body />
      <Bottom />
    </Fragment>
  );
};

export default App;
