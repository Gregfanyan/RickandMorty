import React from "react";

import Character from "../../components/Character";
//import { CharacterPageProps } from "../../types/CharacterType";
import * as S from "./styles";

function CharacterPage({ character, likedList, likeBtnHandleClick }: any) {
  return (
    <S.CharacterSection>
      {character &&
        character.characters &&
        character.characters.results &&
        character.characters.results.map((char: any) => (
          <Character
            key={char.id}
            char={char}
            isLiked={[...likedList].some((id) => id === char.id)}
            likeBtnHandleClick={likeBtnHandleClick}
          />
        ))}
    </S.CharacterSection>
  );
}

export default CharacterPage;
