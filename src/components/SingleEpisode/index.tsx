import { useParams } from "react-router-dom";

import * as S from "../../pages/CharacterPage/styles";
import { IdProps } from "../../types/CharacterType";
import EpisodeCharacters from "../EpisodeCharacters";
import { Wrapper } from "./styles";
//import { SingleEpisodeProps } from "../../types/EpisodeType";

function SingleEpisode({ episodeData, likeBtnHandleClick, likedList }: any) {
  const { id } = useParams<IdProps>();

  const singleEpisode = episodeData?.episodes?.results.find(
    (episodeItem: IdProps) => episodeItem.id.toString() === id
  );

  const { name, air_date, characters } = singleEpisode || {};

  return (
    <Wrapper>
      <div>
        <h1>Episode: {name}</h1>
        {characters && <h3>played {characters.length} characters</h3>}
        <h3>{air_date}</h3>
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
      </div>
    </Wrapper>
  );
}

export default SingleEpisode;
