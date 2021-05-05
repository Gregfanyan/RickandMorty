import React from "react";
import { useParams } from "react-router-dom";

function SingleCharacter({ character }: any) {
  const { id } = useParams<any>();
  const singleCharacter = character.find(
    (char: any) => char.id.toString() === id
  );
  const { image, name, status } = singleCharacter;

  console.log("singleCharacter", singleCharacter);
  return (
    <div>
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
