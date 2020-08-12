import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <li>
        <Link to="/people">Characters</Link>
      </li>
      <li>
        <Link to="/planets">Planets</Link>
      </li>
      <li>
        <Link to="/films">Films</Link>
      </li>
    </div>
  );
};

export default Navbar;
