import React from "react";
import { Link } from "react-router-dom";
import Episode from "../../components/Episode";
import Character from "../../components/Character";
import { useCharacter } from "../../hooks/useCharacter";

function Header() {
  const [character] = useCharacter();
  console.log(character);
  return (
    <div>
      <Link to="/">
        <Character />
      </Link>
      <Link to="/episode">
        <Episode />
      </Link>
    </div>
  );
}

export default Header;
