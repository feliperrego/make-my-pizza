import { createGlobalStyle } from 'styled-components';
import colors from "@ui/theme/colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 100ms linear;
  }

  *, button, input {
    border: 0;
    background: none;
    transition: all 100ms linear;
  }

  html, body, #__next {
    width: 100vw;
    height: 100vh;
    scroll-behavior: smooth;
    background: ${colors.background};
  }

  body {
    overflow-x: hidden;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }
`;
