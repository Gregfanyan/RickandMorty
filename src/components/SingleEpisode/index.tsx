import { useParams } from "react-router-dom";

import * as S from "../../pages/CharacterPage/styles";
import { IdProps } from "../../types/CharacterType";
import EpisodeCharacters from "../EpisodeCharacters";
import { Wrapper } from "./styles";
import { SingleEpisodeProps } from "../../types/EpisodeType";
import { Loading } from "../../pages/CharacterPage/styles";

function SingleEpisode({
  episodeData,
  likeBtnHandleClick,
  likedList,
  loading,
  unLikeBtnHandleClick,
}: SingleEpisodeProps) {
  const { id } = useParams<IdProps>();

  const singleEpisode = episodeData?.find(
    (episodeItem) => episodeItem?.id.toString() === id
  );

  const { name, air_date, characters } = singleEpisode || {};

  return (
    <>
      {loading === false ? (
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
                    unLikeBtnHandleClick={unLikeBtnHandleClick}
                  />
                ))}
            </S.CharacterSection>
          </div>
        </Wrapper>
      ) : (
        <Loading>
          <i className="fas fa-spinner fa-5x"></i>
        </Loading>
      )}
    </>
  );
}

export default SingleEpisode;
