import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <span>Character</span>
      </Link>
      <Link to="/episode">
        <span>Episode</span>
      </Link>
    </div>
  );
}

export default Header;
