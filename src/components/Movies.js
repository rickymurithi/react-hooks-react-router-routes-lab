import React from "react";
import { movies } from "../data";

export default function Movies() {
  const movieDetails = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} min.</p>
      <ul>
        {movie.genres.map((genre) => (<li key={genre}>{genre}</li>))}
      </ul>
    </div>
  ));
  return <React.Fragment>
    <div>
      {/*code*/}
      <h1>Movies Page</h1>
      {movieDetails}
    </div>
  </React.Fragment>
}
