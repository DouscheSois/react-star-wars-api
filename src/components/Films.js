import React, { useEffect, useState } from "react";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        let res = await fetch("https://swapi.dev/api/films/");
        let data = await res.json();

        setFilms(data.results);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div className="body-content">
      <div className="films-data">
        <h1>Films</h1>
        <div className="films-data-card">
          {films.map((film, key) => (
            <div className="film-card-item" key={key}>
              <h4>
                {film.title}, {film.release_date}
              </h4>
              <h4>Episode: {film.episode_id}</h4>
              <h4>{film.opening_crawl}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Films;
