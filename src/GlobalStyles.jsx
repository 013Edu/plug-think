import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: #000;
    box-sizing: border-box;
    color: #fff;
  }
`;

export default GlobalStyle;