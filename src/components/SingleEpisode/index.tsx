import React from "react";
import { useParams, useHistory } from "react-router-dom";

function SingleEpisode({ episodeData }: any) {

  console.log("episodeData", episodeData);
  const { id } = useParams<any>();
  const history = useHistory();

  const singleEpisode = episodeData.find(
    (episodeItem: any) => episodeItem.id.toString() === id
  );

  const { name, air_date, episode } = singleEpisode;
  console.log("singleEpisode", singleEpisode);
  
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
