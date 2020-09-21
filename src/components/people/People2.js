import React, { useEffect, useState, Link } from "react";

import PeopleCardItem from "../PeopleCardItem";
import Pagination from "../Pagination";

const People2 = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        let res = await fetch(`https://swapi.dev/api/people/?page=2`);
        let data = await res.json();
        setPeople(data.results);
        console.log(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchPeople();
  }, []);

  return (
    <div className="body-content">
      <div className="people-data">
        <h1>Characters Pg. 2</h1>
        <div className="people-data-card">
          <PeopleCardItem people={people} />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default People2;
