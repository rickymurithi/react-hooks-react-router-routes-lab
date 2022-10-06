import React from "react";
import { actors } from "../data";

export default function Actors() {
  const actorsWorks = actors.map((actor) => (
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      Movies:
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return <>
  <div>
    <h1>Actors Page</h1>
    {actorsWorks}
  </div>
  </>
}
