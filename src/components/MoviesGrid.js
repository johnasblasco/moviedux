import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  });

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

export default MoviesGrid;
