import React from "react";
import styled from "styled-components";

import Character from "../../components/Character";
import { CharacterPageProps } from "../../types/CharacterType";

const CharacterSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 30px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }

  @media screen and (max-width: 726px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
  }
`;

function CharacterPage({ character }: CharacterPageProps) {
  return (
    <CharacterSection>
      {character &&
        character.characters &&
        character.characters.results &&
        character.characters.results.map((char: any) => (
          <Character key={char.id} char={char} />
        ))}
    </CharacterSection>
  );
}

export default CharacterPage;
