import styled from "styled-components";

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 71vh;
`;

export const ReturnButton = styled.button`
  margin: 0;
  padding: 0;
  position: absolute;
  top: -33px;
  left: 0;
  width: 70px;
  height: 40px;
  border: none;
  background: rgb(87, 32, 155);
  border-radius: 15px;
  cursor: pointer;

  i {
    color: rgb(226, 226, 226);
  }
`;
