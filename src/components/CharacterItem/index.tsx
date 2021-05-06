import React from "react";
import { useParams, useHistory } from "react-router-dom";

function CharacterItem({ character }: any) {
  const { id } = useParams<any>();
  const history = useHistory();

  const characters = character.episodes.results.map((a: any) =>
    a.characters.map((char: any) => char)
  );

  const characterArray = characters.reduce((acc: any, curr: any) => {
    return [...acc, ...curr];
  });

  const singleCharacter = characterArray.find((char: any) => char.id === id);

  const { name, image, status } = singleCharacter;

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