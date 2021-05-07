import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { IdProps, SingleCharacterProps } from "../../types/CharacterType";

function CharacterItem({ character }: SingleCharacterProps) {
  const { id } = useParams<IdProps>();
  const history = useHistory();

  const characters = character?.episodes?.results.map((a: any) =>
    a.characters.map((char: any) => char)
  );

  const characterArray = characters?.reduce((acc: any, curr: any) => {
    return [...acc, ...curr];
  });

  const singleCharacter = characterArray?.find((char: any) => char.id === id);

  const { name, image, status } = singleCharacter || {};
  console.log("singleCharacter", singleCharacter);
  function handleClick() {
    if (!history) {
      return <div>No Character</div>;
    } else {
      history.push("/");
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Back</button>

      <ul>
        <li>
          <img src={image} alt={name} />
        </li>

        <li>{name}</li>

        <li>{status}</li>
      </ul>
    </div>
  );
}

export default CharacterItem;
