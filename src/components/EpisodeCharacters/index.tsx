import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import * as S from "../Character/styles";
import { EpisodeCharacterProps } from "../../types/EpisodeType";
const LinkElem = styled(Link)`
  text-decoration: none;
`;

function EpisodeCharacters({
  char,
  likeBtnHandleClick,
  likedList,
  unLikeBtnHandleClick,
}: EpisodeCharacterProps) {
  const isLiked = likedList.some((id: any) => id === char?.id);
  const { image, name, status, id, origin, location, episode } = char;

  return (
    <S.Wrapper>
      {char && (
        <S.Section>
          <S.StyledButton
            isLiked={!isLiked}
            onClick={
              !isLiked
                ? () => likeBtnHandleClick(id)
                : () => unLikeBtnHandleClick(id)
            }
          >
            <i className="fas fa-heart fa-2x"></i>
          </S.StyledButton>
          <LinkElem to={`/characteritem/${id}`}>
            <S.ProfilePicture src={image} alt={name} />

            <S.Status alive={status === "Alive"}>{char.status}</S.Status>
            <S.Name>{name}</S.Name>
          </LinkElem>
          {episode && <span>In {episode.length} episode</span>}
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
    </S.Wrapper>
  );
}

export default EpisodeCharacters;
