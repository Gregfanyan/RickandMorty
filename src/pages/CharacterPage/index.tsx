import React from "react";

import Character from "../../components/Character";
import { CharacterPageProps } from "../../types/CharacterType";

function CharacterPage({ character }: CharacterPageProps) {
  console.log("character", character);
  return (
    <div>
      {character &&
        character.characters &&
        character.characters.results.map((char: any) => (
          <Character key={char.id} char={char} />
        ))}
    </div>
  );
}

export default CharacterPage;
