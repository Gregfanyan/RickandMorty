import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.main`
  width: 90%;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const Section = styled.section`
  position: relative;
  box-shadow: -5px 7px 11px black;
  background: #f3f3f3;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 10px auto;
`;

export const LinkElem = styled(Link)`
  text-decoration: none;
`;
