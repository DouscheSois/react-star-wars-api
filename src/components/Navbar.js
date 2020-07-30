import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <li>
          <a href="/people">Characters</a>
        </li>
        <li>
          <a className="planets-blue" href="/planets">
            Planets
          </a>
        </li>
        <li>
          <a className="films-green" href="/films">
            Films
          </a>
        </li>
      </div>
    </Fragment>
  );
};

export default Navbar;
