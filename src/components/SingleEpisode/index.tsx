import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { IdProps } from "../../types/CharacterType";
import { SingleEpisodeProps } from "../../types/EpisodeType";

function SingleEpisode({ episodeData }: SingleEpisodeProps) {
  const { id } = useParams<IdProps>();
  const history = useHistory();

  const singleEpisode = episodeData.episodes.results.find(
    (episodeItem: IdProps) => episodeItem.id.toString() === id
  );

  const { name, air_date, episode } = singleEpisode;

  function handleClick() {
    if (!history) {
      return <div>No Episode</div>;
    } else {
      history.push("/episode");
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Back</button>
      <ul>
        <li>{name}</li>

        <li>{episode}</li>
        <li>{air_date}</li>
      </ul>
    </div>
  );
}

export default SingleEpisode;
