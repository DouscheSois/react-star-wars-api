import React, { useEffect, useState } from "react";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        let res = await fetch("http://swapi.dev/api/people/");
        let data = await res.json();

        setPeople(data.results);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchPeople();
  }, []);

  //look at video 13:32

  return (
    <div className="body-content">
      <div className="people-data">
        <h1>Characters</h1>
        <div className="people-data-card">
          {people.map((person, key) => (
            <div className="people-card-item" key={key}>
              <h4>{person.name}</h4>
              <h4>Height: {person.height}cm</h4>
              <h4>Mass: {person.mass}kg</h4>
              <h4>M/F: {person.gender}</h4>
              <h4>Birth Year: {person.birth_year}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;
