import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to="/">
        <div>character</div>
      </Link>
      <Link to="/episode">
        <div>episode</div>
      </Link>
    </div>
  );
}

export default Header;
