import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import { SingleCharacterProps, IdProps } from "../../types/CharacterType";
import classNames from "classnames";
import "../../App.css";

function SingleCharacter({ character, likedList, likeBtnHandleClick }: any) {
  const { id } = useParams<IdProps>();
  const history = useHistory();
  //console.log("isLiked", isLiked);
  const singleCharacter = character?.characters?.results.find(
    (char: IdProps) => char.id.toString() === id
  );
  const isLiked = likedList.some((id: any) => id === singleCharacter?.id);
  const { image, name, status, episode } = singleCharacter || {};

  function handleClick() {
    if (!history) {
      return <div>No Character</div>;
    } else {
      history.push("/");
    }
  }

  const likeBtnClasses = classNames({
    heart: true,
    liked: isLiked,
  });

  return (
    <div>
      <button onClick={handleClick}>Back</button>
      <ul>
        <li>
          <div style={{ position: "relative" }}>
            <img src={image} alt={name} />
            <button
              className={likeBtnClasses}
              onClick={() => likeBtnHandleClick(singleCharacter.id)}
            >
              <i className="fas fa-heart fa-2x"></i>
            </button>
          </div>
        </li>
        <li>{name}</li>
        <li>{status}</li>
        <ul>
          {episode &&
            episode.map((e: any) => (
              <li key={e.episode}>
                <Link to={`/episodeitem/${e.episode}`}>
                  <div>{e.episode}</div>
                </Link>
              </li>
            ))}
        </ul>
      </ul>
    </div>
  );
}

export default SingleCharacter;
