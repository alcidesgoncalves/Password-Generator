import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import PasswordContainer from "./components/PasswordContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #3f08e6;
  width: 35%;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Password Generator</h1>
        <PasswordContainer />
      </Container>
    </>
  );
}

export default App;
