import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import { /* SingleCharacterProps, */ IdProps } from "../../types/CharacterType";
import * as S from "./styles";

function SingleCharacter({ character, likedList, likeBtnHandleClick }: any) {
  const { id } = useParams<IdProps>();
  const history = useHistory();
  const singleCharacter = character?.characters?.results.find(
    (char: IdProps) => char.id.toString() === id
  );
  const isLiked = likedList.some((id: any) => id === singleCharacter?.id);
  const { image, name, status, episode, origin, location } =
    singleCharacter || {};

  function handleClick() {
    if (!history) {
      return <div>No Character</div>;
    } else {
      history.push("/");
    }
  }

  return (
    <S.Wrapper>
      <S.ReturnButton onClick={handleClick}>
        <i className="fas fa-long-arrow-alt-left fa-3x"></i>
      </S.ReturnButton>
      {singleCharacter && (
        <S.Section>
          <S.StyledButton
            isLiked={!isLiked}
            onClick={() => likeBtnHandleClick(singleCharacter.id)}
          >
            <i className="fas fa-heart fa-2x"></i>
          </S.StyledButton>
          <S.ProfilePicture src={image} alt={name} />

          <S.Status alive={status === "Alive"}>
            {singleCharacter.status}
          </S.Status>
          <S.Name>{name}</S.Name>
          <span>
            In {episode.length} episode
            {episode.length === 1 ? "" : "s"}
          </span>
          <S.Location>
            <span>
              <S.LocationTitle>Origin</S.LocationTitle> {origin.name}
            </span>
            <span>
              <S.LocationTitle>Lives</S.LocationTitle>
              {location.name}
            </span>
          </S.Location>
        </S.Section>
      )}
      <div>
        <h1>Played Episodes:</h1>
        <S.EpisodeSection>
          {episode &&
            episode.map((e: any) => (
              <S.EpisodeList key={e.episode}>
                <Link to={`/episodeitem/${e.episode}`}>
                  <div>{e.episode}</div>
                </Link>
              </S.EpisodeList>
            ))}
        </S.EpisodeSection>
      </div>
    </S.Wrapper>
  );
}

export default SingleCharacter;
