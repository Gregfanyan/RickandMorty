import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CharacterProps } from "../../types/CharacterType";
import styled from "styled-components";

import "../../App.css";
import classNames from "classnames";
import {
  ProfilePicture,
  Section,
  Status,
  Name,
  Location,
  LocationTitle,
  Heart,
  Liked,
  Wrapper,
} from "./styles";

const LinkElem = styled(Link)`
  text-decoration: none;
`;

function Character({ char }: any) {
  const [isLiked, setIsLiked] = useState(false);
  const { image, name, status, id, origin, location, episode } = char;

  const likeBtnHandleClick = () => {
    setIsLiked(!isLiked);
  };

  const likeBtnClasses = classNames({
    heart: true,
    liked: isLiked,
  });

  return (
    <Wrapper>
      {char && (
        <Section>
          <button className={likeBtnClasses} onClick={likeBtnHandleClick}>
            <i className="fas fa-heart fa-2x"></i>
          </button>
          <ProfilePicture className="lol" src={image} alt={name} />

          <Status alive={status === "Alive"}>{char.status}</Status>
          <LinkElem to={`/${id}`}>
            <Name>{name}</Name>
          </LinkElem>
          <span>
            In {episode.length} episode
            {episode.length === 1 ? "" : "s"}
          </span>
          <Location>
            <span>
              <LocationTitle>Origin</LocationTitle> {origin.name}
            </span>
            <span>
              <LocationTitle>Lives</LocationTitle>
              {location.name}
            </span>
          </Location>
        </Section>
      )}
    </Wrapper>
  );
}

export default Character;
