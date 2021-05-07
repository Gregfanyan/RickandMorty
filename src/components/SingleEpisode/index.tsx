import { useParams, useHistory } from "react-router-dom";

import * as S from "../../pages/CharacterPage/styles";
import { IdProps } from "../../types/CharacterType";
import EpisodeCharacters from "../EpisodeCharacters";
//import { SingleEpisodeProps } from "../../types/EpisodeType";

function SingleEpisode({ episodeData, likeBtnHandleClick, likedList }: any) {
  const { id } = useParams<IdProps>();
  const history = useHistory();

  const singleEpisode = episodeData?.episodes?.results.find(
    (episodeItem: IdProps) => episodeItem.id.toString() === id
  );

  const { name, air_date, episode, characters } = singleEpisode || {};

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
        {characters && <li>played {characters.length} characters</li>}
        <S.CharacterSection>
          {characters &&
            characters.map((char: any) => (
              <EpisodeCharacters
                key={char.id}
                char={char}
                likeBtnHandleClick={likeBtnHandleClick}
                likedList={likedList}
              />
            ))}
        </S.CharacterSection>
      </ul>
    </div>
  );
}

export default SingleEpisode;
