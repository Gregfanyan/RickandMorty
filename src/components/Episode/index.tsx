import React from "react";

function Episode({ episodedata }: any) {
  console.log(episodedata);
  const { name, air_date, episode } = episodedata;
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{episode}</li>
        <li>{air_date}</li>
      </ul>
    </div>
  );
}

export default Episode;
