import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CharacterProps } from "../../types/CharacterType";
import "../../App.css";
import classNames from "classnames";

function Character({ char }: CharacterProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { image, name, status, id } = char;

  const likeBtnHandleClick = () => {
    setIsLiked(!isLiked);
  };

  const likeBtnClasses = classNames({
    heart: true,
    liked: isLiked,
  });

  return (
    <div>
      <ul>
        <li className="imageBlock">
          <img src={image} alt={name} />
          <button className={likeBtnClasses} onClick={likeBtnHandleClick}>
            <i className="fas fa-heart fa-2x"></i>
          </button>
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
