import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  body {
    background-color: #f0f2f5;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
