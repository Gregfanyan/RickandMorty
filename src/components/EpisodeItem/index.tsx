import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { episodedProps } from "../../types/EpisodeType";

function EpisodeItem({ episodeData }: any) {
  const { episode } = useParams<episodedProps>();
  const history = useHistory();

  const singleEpisode = episodeData?.episodes?.results.find(
    (e: any) => e.episode === episode
  );
  console.log("singleEpisode", singleEpisode);

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
      {singleEpisode ? (
        <div>
          <h1>Episode Name: {singleEpisode.name}</h1>
          <h2>Created at: {singleEpisode.air_date}</h2>
        </div>
      ) : (
        <h1>No Episode for this Character</h1>
      )}
    </>
  );
}

export default EpisodeItem;
