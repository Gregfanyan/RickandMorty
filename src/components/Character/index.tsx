import { CharacterProps } from "../../types/CharacterType";
import * as S from "./styles";

function Character({
  char,
  isLiked,
  likeBtnHandleClick,
  unLikeBtnHandleClick,
}: CharacterProps) {
  const { image, name, status, id, origin, location, episode } = char || {};
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
          <S.LinkElem to={`/${id}`}>
            <S.ProfilePicture src={image} alt={name} />
            <S.Status alive={status === "Alive"}>{char.status}</S.Status>
            <S.Name>{name}</S.Name>
          </S.LinkElem>
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

export default Character;
