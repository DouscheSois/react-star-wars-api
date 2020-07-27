import React, { useEffect, useState } from "react";

const Body = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        let data = await Promise.all([
          fetch("http://swapi.dev/api/people/").then((response) =>
            response.json()
          ),
          fetch("http://swapi.dev/api/planets/").then((response) =>
            response.json()
          ),
        ]);

        const allData = data[(0, 1)].results;

        setPeople(allData);
      } catch (e) {
        return alert("error fetching people");
      }
    };
    fetchPeople();

    const fetchPlanets = async () => {
      try {
        let res = await fetch("http://swapi.dev/api/planets/");
        let data = await res.json();

        console.log(data.results);
        setPlanets(data.results);
      } catch (e) {
        return alert("error fetching planets");
      }
    };
    fetchPlanets();
  }, []);
  return (
    <div className="Body">
      {people.map((person, key) => (
        <ul>
          <li>
            {person.name},{person.gender}, {person.birth_year},{" "}
            {person.homeworld}
          </li>
        </ul>
      ))}
      {planets.map((planet) => (
        <ul>
          <li>
            {planet.name}, {planet.population}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Body;
