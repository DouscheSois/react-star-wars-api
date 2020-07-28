import React, { useEffect, useState } from "react";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        let res = await fetch("http://swapi.dev/api/films/");
        let data = await res.json();

        setFilms(data.results);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div className="films-data">
      <ul>
        {films.map((film, key) => (
          <li key={key}>
            {film.title}, {film.release_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Films;
