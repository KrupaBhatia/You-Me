import React, { useRef, useEffect, useState } from "react";
import Theme from "../Components/Theme.js";
import "./MoviePage.css";
import _ from "lodash";

const MoviePage = ({ movies, onPageChange }) => {
  const searchInputRef = useRef(null);
  const [filteredMovies, setFilteredMovies] = useState(movies.results);
  const [theme, setTheme] = useState(true);
  const [term, setTerm] = useState(" ");

  const searchTerm = (term) => {
    console.log(term, "21");
    if (term.length === 0) {
      setFilteredMovies(movies.results);
    } else {
      return _.filter(movies.results, (movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      );
    }
  };

  const searchMovies = (e) => {
    e.preventDefault();
    const searchedTerm = searchInputRef.current.value;
    setTerm(searchedTerm);
    setFilteredMovies(searchTerm(searchedTerm));
  };

  const loadMore = () => {
    onPageChange();
    const newMoviws = searchTerm(term);
    setFilteredMovies((preventDefault) => [...preventDefault, newMoviws]);
  };

  const themeChange = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    setFilteredMovies(searchTerm(term));
  }, [movies, term]);
  return (
    <>
      <div className={theme ? "light-theme" : "dark-theme"}>
        <h1>Movie Page</h1>
        <div>
          <input
            type="text"
            placeholder="Search Movies"
            ref={searchInputRef}
            onChange={searchMovies}
          />
        </div>
        <div>
          <Theme theme={theme} themeChange={themeChange} />
        </div>
        <div className="container">
          {filteredMovies.length ? (
            filteredMovies.map((movie, index) => (
              <div key={index} className="card">
                <h2>{movie.title}</h2>
                <img
                  className="img"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            ))
          ) : (
            <h2>No movies found</h2>
          )}
        </div>
        <div>
          <button onClick={loadMore}> Load More </button>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
