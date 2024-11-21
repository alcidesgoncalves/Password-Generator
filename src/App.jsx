import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import PasswordContainer from "./components/PasswordContainer";
import RangeInput from "./components/RangeInput";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #3f08e6;
  width: 35%;
  min-height: 80vh;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #24222a;
  margin-top: 1em;
  padding: 1rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Password Generator</h1>
        <PasswordContainer />
        <MainDiv>
          <RangeInput />
          <Checkbox />
          <Button />
        </MainDiv>
      </Container>
    </>
  );
}

export default App;
