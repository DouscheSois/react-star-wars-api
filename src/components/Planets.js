import React, { useEffect, useState } from "react";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        let res = await fetch("http://swapi.dev/api/planets/");
        let data = await res.json();

        setPlanets(data.results);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchPlanets();
  }, []);

  // ask how to make homeworld appear
  //How to make this into a nice number

  return (
    <div className="body-content">
      <div className="planets-data">
        <h1>Planets</h1>
        <div className="planets-data-card">
          {planets.map((planet, key) => (
            <div className="planets-card-item" key={key}>
              <h4>{planet.name}</h4>
              <h4>
                Rotation period of {planet.rotation_period} hours and Orbital
                period of {planet.orbital_period} days
              </h4>
              <h4>Diameter of {planet.diameter} miles</h4>
              <h4>{planet.climate}</h4>
              <h4>{planet.terrain}</h4>
              <h4>{planet.population}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planets;
