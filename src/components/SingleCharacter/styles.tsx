import styled from "styled-components";

export const ProfilePicture = styled.img`
  width: 250px;
  height: 250px;
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
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 340px;
  margin: 10px auto;

  span {
    margin-bottom: 10px;
  }
`;

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ReturnButton = styled.button`
  margin: 0;
  padding: 0;
  position: absolute;
  top: -33px;
  left: 0;
  width: 70px;
  border: none;
  background: rgb(87, 32, 155);
  border-radius: 15px;
  cursor: pointer;

  i {
    color: rgb(226, 226, 226);
  }
`;

export const EpisodeSection = styled.div`
  position: relative;
  box-shadow: -5px 7px 11px black;
  background: #f3f3f3;
  border-radius: 30px;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: center;
  align-items: center;
  width: 340px;
  max-height: 300px;
  margin: 10px auto;
  overflow: auto;
`;

export const EpisodeList = styled.div`
  display: inline-block;
  align-items: center;
  align-self: center;
  font-size: 14px;
  font-style: italic;
  word-break: break-word;
  text-align: justify;
  padding: 20px;
`;
