import React from "react";
import { directors } from "../data";

export default function Directors() {
  const directorsSlot = directors.map((director) => (
    <div key={director.name}>
      <h2>{director.name}</h2>
      Movies:
      <ul>
        {director.movies.map((movie) => (<li key={movie}>{movie}</li>))}
      </ul>
    </div>
  ));
  return (
  <div>
    {/*code*/}
    <h1>Directors Page</h1>
    {directorsSlot}
  </div>);
}