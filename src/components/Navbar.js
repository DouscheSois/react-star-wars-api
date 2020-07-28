import React, { Fragment } from "react";

const Body = () => {
  return (
    <Fragment>
      <div className="navbar">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a className="planets-blue" href="#">
            Planets
          </a>
        </li>
        <li>
          <a className="films-green" href="#">
            Films
          </a>
        </li>
      </div>
    </Fragment>
  );
};

export default Body;
