import { Link } from "react-router-dom";
import styled from "styled-components";

//import { CharacterProps } from "../../types/CharacterType";
import "../../App.css";
import classNames from "classnames";
import * as S from "./styles";

const LinkElem = styled(Link)`
  text-decoration: none;
`;

function Character({ char, isLiked, likeBtnHandleClick }: any) {
  const { image, name, status, id, origin, location, episode } = char;

  const likeBtnClasses = classNames({
    heart: true,
    liked: isLiked,
  });

  return (
    <S.Wrapper>
      {char && (
        <S.Section>
          <button
            className={likeBtnClasses}
            onClick={() => likeBtnHandleClick(id)}
          >
            <i className="fas fa-heart fa-2x"></i>
          </button>
          <S.ProfilePicture src={image} alt={name} />

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
