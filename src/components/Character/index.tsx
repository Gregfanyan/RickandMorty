import React from "react";

function Character({ char }: any) {
  console.log(char);
  const { image, name, status } = char;
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

export default Character;
