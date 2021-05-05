import React from "react";
import { Link } from "react-router-dom";

function Episode({ episodedata }: any) {
  console.log(episodedata);
  const { name, air_date, episode, id } = episodedata;
  return (
    <div>
      <ul>
        <Link to={`/episodeid/${id}`}>
          <li>{episode}</li>
        </Link>
        <li>{name}</li>
        <li>{air_date}</li>
      </ul>
    </div>
  );
}

export default Episode;
