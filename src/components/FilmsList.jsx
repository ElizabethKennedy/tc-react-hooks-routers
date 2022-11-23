import React, { useState, useEffect } from "react";
import "./App.css";

export default FilmsList;

function FilmsList(props) {
  let [list, setList] = useState([]);

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((films) => setList(films))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <ul>
        {list.map((film) => {
          return (
            <li key={film.id}>
              <h2>{film.title}</h2> <br />
              <img
                src={film.image}
                alt="Movie Poster"
                className="FilmsList-img"
              />
              <br />{" "}
              <span className="light-text">
                <i>{film.description}</i>
              </span>
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
}

