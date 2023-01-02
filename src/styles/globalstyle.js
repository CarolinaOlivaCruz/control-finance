import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
  
  }

  :root {
    --color-primary:#155BCB;
    --color-grey-10: #f2f2f2;
    --color-grey-0: #ffffff;
  }

  body {
    position: relative;
  }

`;
