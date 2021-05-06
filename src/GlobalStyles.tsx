import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  background: #111213;
  color: #22215b;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  min-height: 100vh;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

`;

export default GlobalStyles;
