import React from "react";

import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="pagination">
      <Link to="/people_1">Pg. 1</Link>
      <Link to="/people_2">Pg. 2</Link>
      <Link to="/people_3">Pg. 3</Link>
      <Link to="/people_4">Pg. 4</Link>
      <Link to="/people_5">Pg. 5</Link>
      <Link to="/people_6">Pg. 6</Link>
      <Link to="/people_7">Pg. 7</Link>
      <Link to="/people_8">Pg. 8</Link>
      <Link to="/people_9">Pg. 9</Link>
    </div>
  );
};

export default Pagination;
