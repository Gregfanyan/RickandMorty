import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.section`
  width: 100%;
  overflow: hidden;
  box-shadow: -5px 7px 11px 2px black;
  background: rgb(87, 32, 155);
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100%;
  min-height: 10vh;
  position: sticky;
  top: 0;
  margin-bottom: 35px;
  z-index: 1;

  @media screen and (max-width: 726px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
  color: rgb(226, 226, 226);
  letter-spacing: 5px;
  font-size: 23px;
  font-weight: bold;
  cursor: pointer;
`;

export const NavLinks = styled.ul`
  text-transform: uppercase;
  color: rgb(226, 226, 226);
  letter-spacing: 5px;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  width: 30%;

  li {
    list-style: none;
  }

  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 726px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
    grid-gap: 5px;
  }
`;

export const MenuItem = styled.div`
  font-size: 15px;
  color: rgb(226, 226, 226);
  font-weight: bold;
`;

export const LinkElem = styled(NavLink)`
  &.active {
    color: rgb(226, 226, 226);
  }
`;

export const TitleLink = styled(NavLink)`
  text-decoration: none;
`;

export const UserSection = styled.div`
  display: flex;
  padding-left: 4em;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 726px) {
    padding-right: 4em;
  }
`;

export const UserItem = styled.div`
  padding: 5px;
`;

export const UserButton = styled.button`
   display: inline-block;
   padding: 0.6em 1.2em;
   border: none;
   border-radius: 10px;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #ffffff;
   text-align: center;
   transition: all 0.2s;
  background-color: #9a4ef1;
  width: 90px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:hover {
     color: #000000;
     background-color: #ffffff;
  }
  @media all and (max-width: 30em) {
      display: block;
      margin: 0.4em auto;
  }
`;
