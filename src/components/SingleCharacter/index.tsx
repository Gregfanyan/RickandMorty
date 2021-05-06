import React from "react";

import { useParams, useHistory } from "react-router-dom";
import { SingleCharacterProps, IdProps } from "../../types/CharacterType";

function SingleCharacter({ character }: SingleCharacterProps) {
  const { id } = useParams<IdProps>();
  const history = useHistory();
  console.log("singleCharacter", character);

  const singleCharacter = character.characters.results.find(
    (char: IdProps) => char.id.toString() === id
  );
  const { image, name, status, episode } = singleCharacter;

  function handleClick() {
    if (!history) {
      return <div>No Character</div>;
    } else {
      history.push("/");
    }
  }

  console.log("singleCharacter", singleCharacter);

  return (
    <div>
      <button onClick={handleClick}>Back</button>
      <ul>
        <li>
          <img src={image} alt={name} />
        </li>
        <li>{name}</li>
        <li>{status}</li>
        <li>
          {episode.map((e: any) => (
            <li key={e}>{e.episode}</li>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default SingleCharacter;
