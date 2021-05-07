import styled from "styled-components";

export const NavBar = styled.section`
  box-shadow: -5px 7px 11px 2px black;
  background: rgb(87, 32, 155);
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 8vh;

  @media screen and (max-width: 726px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    grid-gap: 5px;
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
