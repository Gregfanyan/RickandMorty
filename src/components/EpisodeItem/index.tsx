import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { episodedProps } from "../../types/EpisodeType";

function EpisodeItem({ episodeData }: any) {
  const { episode } = useParams<episodedProps>();
  const history = useHistory();

  const singleEpisode = episodeData?.episodes?.results.find(
    (e: any) => e.episode === episode
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
      {singleEpisode && (
        <div>
          <div>{singleEpisode.name}</div>
          <div>{singleEpisode.air_date}</div>
        </div>
      )}
    </>
  );
}

export default EpisodeItem;
