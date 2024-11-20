import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24222a;
  width: 35%;
  min-height: 60vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Password Generator</h1>
      <Container></Container>
    </>
  );
}

export default App;
