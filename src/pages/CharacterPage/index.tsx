import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Character from "../../components/Character";
import { CharacterPageProps, CharacterType } from "../../types/CharacterType";
import * as S from "./styles";

function CharacterPage({
  character,
  likedList,
  likeBtnHandleClick,
  loading,
  unLikeBtnHandleClick,
}: CharacterPageProps) {
  const { isLoading } = useAuth0();

  return (
    <>
      {loading === false && !isLoading ? (
        <S.CharacterSection>
          {character &&
            character.map((char: CharacterType) => (
              <Character
                key={char.id}
                char={char}
                isLiked={[...likedList].some((id: any) => id === char.id)}
                likeBtnHandleClick={likeBtnHandleClick}
                unLikeBtnHandleClick={unLikeBtnHandleClick}
              />
            ))}
        </S.CharacterSection>
      ) : (
        <S.Loading>
          <i className="fas fa-spinner fa-5x"></i>
        </S.Loading>
      )}
    </>
  );
}

export default CharacterPage;
