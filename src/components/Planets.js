import React, { useEffect, useState } from "react";

const Planets = ({ planet }) => {
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

  return (
    <div className="planets-data">
      <ul>
        {planets.map((planet, key) => (
          <li key={key}>
            {planet.name}, {planet.climate}, {planet.population}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;
