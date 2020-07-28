import React, { useEffect, useState } from "react";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        let res = await fetch("http://swapi.dev/api/people/");
        let data = await res.json();

        setPeople(data.results);
        console.log(data.results);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div className="people-data">
      <ul>
        {people.map((person, key) => (
          <li key={key}>
            {person.name},{person.gender}, {person.homeworld}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;
