import React from "react";
import { useParams, useHistory } from "react-router-dom";

function SingleCharacter({ character }: any) {
  const { id } = useParams<any>();
  const history = useHistory();

  const singleCharacter = character.find(
    (char: any) => char.id.toString() === id
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
