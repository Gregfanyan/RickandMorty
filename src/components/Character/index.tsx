//import { CharacterProps } from "../../types/CharacterType";
import * as S from "./styles";

function Character({ char, isLiked, likeBtnHandleClick }: any) {
  const { image, name, status, id, origin, location, episode } = char;

  return (
    <S.Wrapper>
      {char && (
        <S.Section>
          <S.StyledButton
            isLiked={!isLiked}
            onClick={() => likeBtnHandleClick(id)}
          >
            <i className="fas fa-heart fa-2x"></i>
          </S.StyledButton>
          <S.ProfilePicture src={image} alt={name} />

          <S.Status alive={status === "Alive"}>{char.status}</S.Status>
          <S.LinkElem to={`/${id}`}>
            <S.Name>{name}</S.Name>
          </S.LinkElem>
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
