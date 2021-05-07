import React from "react";

import * as S from "./styles";

const Title = "Rick and Morty";
function Header() {
  return (
    <S.NavBar>
      <S.TitleLink to="/">
        <S.Title>{Title}</S.Title>
      </S.TitleLink>
      <S.NavLinks>
        <li>
          <S.LinkElem exact to="/">
            <S.MenuItem>character</S.MenuItem>
          </S.LinkElem>
        </li>
        <li>
          <S.LinkElem exact to="/episode">
            <S.MenuItem>episode</S.MenuItem>
          </S.LinkElem>
        </li>
      </S.NavLinks>
    </S.NavBar>
  );
}

export default Header;
