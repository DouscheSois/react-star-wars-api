import React from "react";
import Darth from "../media/darth.png";
const Home = () => {
  // const [loading, setLoading] = useState([]);

  return (
    <div className="home-content">
      <h2>Welcome Star Wars Fans</h2>
      <h5>
        This small app shows you some of the characters, planets, and films of
        the Star Wars Franchise.
      </h5>

      <h4>Start by Navigating Above</h4>
      <img src={Darth} alt="Darth Vador" height="200px" width="200px" />
      <br />
      <small>Sith Territory</small>
    </div>
  );
};

export default Home;
