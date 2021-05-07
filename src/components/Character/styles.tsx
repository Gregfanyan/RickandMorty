import styled from "styled-components";

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
  font-size: 13px;
  align-self: center;
  width: 80px;
  padding: 5px;
  background: ${({ alive }) =>
    alive ? `rgba(76, 227, 100, 0.5)` : `rgba(227, 76, 76, 0.5)`};
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
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  margin: 10px auto;

  span {
    margin-bottom: 10px;
  }
`;

export const Heart = styled.button`
   {
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
  }
`;

export const Liked = styled.button`
   {
    color: red;
  }
`;

export const Wrapper = styled.main`
  width: 90%;
  display: flex;
  flex-direction: row;
`;