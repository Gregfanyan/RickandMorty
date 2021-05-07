import React from "react";

import Character from "../../components/Character";
import { CharacterPageProps } from "../../types/CharacterType";
import * as S from "./styles";

function CharacterPage({ character }: CharacterPageProps) {
  return (
    <S.CharacterSection>
      {character &&
        character.characters &&
        character.characters.results &&
        character.characters.results.map((char: any) => (
          <Character key={char.id} char={char} />
        ))}
    </S.CharacterSection>
  );
}

export default CharacterPage;
