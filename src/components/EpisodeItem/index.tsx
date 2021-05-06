import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { IdProps } from "../../types/CharacterType";

function EpisodeItem({ episodeData }: any) {
  console.log("params", useParams());
  const { episode } = useParams<any>();
  const history = useHistory();
  console.log("episodeData", episodeData);

  const singleEpisode = episodeData.episodes.results.find(
    (char: any) => char.episode === episode
  );

  function handleClick() {
    if (!history) {
      return <div>No Episode</div>;
    } else {
      history.push("/");
    }
  }

  return (
    <>
      <button onClick={handleClick}>Back</button>
      <div>
        <div>{singleEpisode.name}</div>
        <div>{singleEpisode.air_date}</div>
      </div>
    </>
  );
}

export default EpisodeItem;
