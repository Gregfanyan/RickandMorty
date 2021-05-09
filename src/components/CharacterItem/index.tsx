import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { Loading } from "../../pages/CharacterPage/styles";

import {
  IdProps,
  SingleCharacterProps,
  CharacterType,
} from "../../types/CharacterType";
import * as S from "../SingleCharacter/styles";

function CharacterItem({
  character,
  likedList,
  likeBtnHandleClick,
  loading,
  unLikeBtnHandleClick,
}: SingleCharacterProps) {
  const { id } = useParams<IdProps>();
  const history = useHistory();

  const characters = character?.episodes?.results.map(
    (a: CharacterType[] | any) => a.characters.map((char: []) => char)
  );

  const characterIdArray = characters?.reduce((acc: [], curr: []) => {
    return [...acc, ...curr];
  });
  const singleCharacter = characterIdArray?.find((char: any) => char.id === id);

  const { name, image, status, location, origin } = singleCharacter || {};
  const isLiked = likedList.some((id: string) => id === singleCharacter?.id);

  function handleClick() {
    if (!history) {
      return <div>No Character</div>;
    } else {
      history.push("/");
    }
  }

  return (
    <>
      {loading === false ? (
        <S.Wrapper>
          <S.ReturnButton onClick={handleClick}>
            <i className="fas fa-long-arrow-alt-left fa-3x"></i>
          </S.ReturnButton>
          {singleCharacter && (
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
              <S.ProfilePicture src={image} alt={name} />

              <S.Status alive={status === "Alive"}>
                {singleCharacter.status}
              </S.Status>
              <S.Name>{name}</S.Name>
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
      ) : (
        <Loading>
          <i className="fas fa-spinner fa-5x"></i>
        </Loading>
      )}
    </>
  );
}

export default CharacterItem;
