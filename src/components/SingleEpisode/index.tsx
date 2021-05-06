import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import { IdProps } from "../../types/CharacterType";
import { SingleEpisodeProps } from "../../types/EpisodeType";

function SingleEpisode({ episodeData }: SingleEpisodeProps) {
  const { id } = useParams<IdProps>();
  const history = useHistory();

  const singleEpisode = episodeData.episodes.results.find(
    (episodeItem: IdProps) => episodeItem.id.toString() === id
  );

  const { name, air_date, episode, characters } = singleEpisode;

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
        <ul>
          {characters.map((e: any) => (
            <li key={e.id}>
              <Link to={`/characteritem/${e.id}`}>
                <div>{e.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default SingleEpisode;
