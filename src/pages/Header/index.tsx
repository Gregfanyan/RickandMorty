import React from "react";
import { Link } from "react-router-dom";
import Episode from "../Episode";
import Character from "../Character";
import { useCharacter } from "../../hooks/useCharacter";

function Header() {
  const [character] = useCharacter();
  return (
    <div>
      <Link to="/">
        <Character character={character} />
      </Link>
      <Link to="/episode">
        <Episode />
      </Link>
    </div>
  );
}

export default Header;
