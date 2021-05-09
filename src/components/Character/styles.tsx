import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Name = styled.h2`
  font-size: 18px;
  color: #22215b;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Status = styled.div<{ alive: boolean }>`
  text-align: center;
  margin-top: 20px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  letter-spacing: 3px;
  padding: 5px;
  background: ${({ alive }) =>
    alive ? `rgba(76, 227, 100, 0.5)` : `rgba(227, 76, 76, 0.5)`};
`;

export const StyledButton = styled.button<{ isLiked: boolean }>`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  padding: none;
  border: none;
  outline: inherit;
  background: none;
  font-size-adjust: initial;
  color: yellow;
  color: ${({ isLiked }) => (isLiked ? `#FFFFFF` : `#F34423`)};

  i {
    text-shadow: 0 0 3px #f34423;
  }
`;

export const Location = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
`;

export const LocationTitle = styled.span`
  display: block;
  font-weight: bold;
  font-size: 16px;
`;

export const Section = styled.section`
  position: relative;
  box-shadow: -5px 7px 11px black;
  background: #f3f3f3;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin: 10px auto;

  span {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 280px;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.main`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LinkElem = styled(Link)`
  text-decoration: none;
`;
