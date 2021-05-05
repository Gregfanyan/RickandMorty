import React from "react";
import Character from "../../components/Character";

function CharacterPage({ character }: any) {
  return (
    <div>
      {character &&
        character.map((char: any) => <Character key={char.id} char={char} />)}
    </div>
  );
}

export default CharacterPage;
