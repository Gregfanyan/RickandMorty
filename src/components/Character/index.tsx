import React from "react";
import { Link } from "react-router-dom";

function Character({ char }: any) {
  const { image, name, status, id } = char;
  return (
    <div>
      <ul>
        <li>
          <img src={image} alt={name} />
        </li>
        <Link to={`/${id}`}>
          <li>{name}</li>
        </Link>
        <li>{status}</li>
      </ul>
    </div>
  );
}

export default Character;
