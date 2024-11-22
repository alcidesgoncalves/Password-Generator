import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "JetBrains Mono", serif;
    background-color: #101017; /* Cor de fundo */
    color: #fff; /* Cor do texto */
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%; /* Garante que o body ocupe toda a altura da viewport */
  }

  #root{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
  }
`;

export default GlobalStyle;
