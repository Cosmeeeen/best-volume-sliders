import { createGlobalStyle } from "styled-components";

import * as theme from './Themes/default.json';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Urbanist', sans-serif;
    margin: 0;
    padding: 0;
  }
  body{
    background-color: ${theme.color.background};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: hidden;
  }
`;

export default GlobalStyle;