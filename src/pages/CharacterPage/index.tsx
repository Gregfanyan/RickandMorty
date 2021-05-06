import React from "react";

import Character from "../../components/Character";
import { CharacterPageProps } from "../../types/CharacterType";

function CharacterPage({ character }: CharacterPageProps) {
  return (
    <div>
      {character &&
        character.characters &&
        character.characters.results &&
        character.characters.results.map((char: any) => (
          <Character key={char.id} char={char} />
        ))}
    </div>
  );
}

export default CharacterPage;
