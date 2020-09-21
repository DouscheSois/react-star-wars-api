import React, { Fragment } from "react";

const PeopleCardItem = ({ people }) => {
  return (
    <Fragment>
      {people.map((person, key) => (
        <div className="people-card-item" key={key}>
          <h4>{person.name}</h4>
          <h4>Height: {person.height}cm</h4>
          <h4>Mass: {person.mass}kg</h4>
          <h4>M/F: {person.gender}</h4>
          <h4>Birth Year: {person.birth_year}</h4>
        </div>
      ))}
    </Fragment>
  );
};

export default PeopleCardItem;
