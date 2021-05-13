import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import * as S from "./styles";
import Login from "../../components/Login";
import Logout from "../../components/Logout";
import Profile from "../../components/Profile";
import Signup from "../../components/Signup";

const Title = "Rick and Morty";
function Header() {
  const { isAuthenticated } = useAuth0();

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

        {isAuthenticated && (
          <li>
            <S.LinkElem exact to="/episode">
              <S.MenuItem>episode</S.MenuItem>
            </S.LinkElem>
          </li>
        )}
      </S.NavLinks>
      <S.UserSection>
        <S.UserItem>
          <Login />
        </S.UserItem>

        <S.UserItem>
          <Signup />
        </S.UserItem>

        <S.UserItem>
          <Logout />
        </S.UserItem>

        <S.UserItem>
          <Profile />
        </S.UserItem>
      </S.UserSection>
    </S.NavBar>
  );
}

export default Header;
