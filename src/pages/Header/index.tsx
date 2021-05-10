import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import * as S from "./styles";
import Login from "../../components/Login";
import Logout from "../../components/Logout";
import Profile from "../../components/Profile";
import Signup from "../../components/Signup";

const Title = "Rick and Morty";
function Header() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>""</div>;

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
        <li>
          <S.MenuItem>
            <Login />
          </S.MenuItem>
        </li>
        <li>
          <S.MenuItem>
            <Signup />
          </S.MenuItem>
        </li>
        <li>
          <S.MenuItem>
            <Logout />
          </S.MenuItem>
        </li>
        <li>
          <S.MenuItem>
            <Profile />
          </S.MenuItem>
        </li>
      </S.NavLinks>
    </S.NavBar>
  );
}

export default Header;
