import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as S from "./styles";
import styled from "styled-components";

const LinkElem = styled(NavLink)`
  &.active {
    color: rgb(226, 226, 226);
  }
`;

function Header() {
  return (
    <S.NavBar>
      <Link to="/">
        <S.Title>Title</S.Title>
      </Link>
      <S.NavLinks>
        <li>
          <LinkElem exact to="/">
            <S.MenuItem>character</S.MenuItem>
          </LinkElem>
        </li>
        <li>
          <LinkElem exact to="/episode">
            <S.MenuItem>episode</S.MenuItem>
          </LinkElem>
        </li>
      </S.NavLinks>
    </S.NavBar>
  );
}

export default Header;
