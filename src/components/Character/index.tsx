import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CharacterProps } from "../../types/CharacterType";
import styled from "styled-components";

import "../../App.css";
import classNames from "classnames";
import * as S from "./styles";

const LinkElem = styled(Link)`
  text-decoration: none;
`;

function Character({ char, setLikedList, isLiked}: any) {
  //const [isLiked, setIsgLiked] = useState(false);
  const { image, name, status, id, origin, location, episode } = char;

  const likeBtnHandleClick = () => {
    setLikedList((prev: string[]) => prev.push(id));
  };

  const likeBtnClasses = classNames({
    heart: true,
    liked: isLiked,
  });

  return (
    <S.Wrapper>
      {char && (
        <S.Section>
          <button className={likeBtnClasses} onClick={likeBtnHandleClick}>
            <i className="fas fa-heart fa-2x"></i>
          </button>
          <S.ProfilePicture className="lol" src={image} alt={name} />

          <S.Status alive={status === "Alive"}>{char.status}</S.Status>
          <LinkElem to={`/${id}`}>
            <S.Name>{name}</S.Name>
          </LinkElem>
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
    </S.Wrapper>
  );
}

export default Character;
