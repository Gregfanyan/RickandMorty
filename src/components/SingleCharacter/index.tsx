import React from "react";

import { useParams, useHistory } from "react-router-dom";
import { SingleCharacterProps, IdProps } from "../../types/CharacterType";

function SingleCharacter({ character }: SingleCharacterProps) {
  const { id } = useParams<IdProps>();
  const history = useHistory();

  const singleCharacter = character.find(
    (char: IdProps) => char.id.toString() === id
  );
  const { image, name, status } = singleCharacter;

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

export default SingleCharacter;
