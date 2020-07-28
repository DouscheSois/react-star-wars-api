import React from "react";
import People from "./People";
import Planets from "./Planets";
import Films from "./Films";

const Body = () => {
  // const [loading, setLoading] = useState([]);

  return (
    <div className="body-content">
      <People />
      <Planets />
      <Films />
    </div>
  );
};

export default Body;
