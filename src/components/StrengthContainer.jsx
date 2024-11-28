import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1em;
  margin-bottom: 1em;
  max-width: 460px;
  padding: 1rem 0;
  background-color: #19171e;
`;

const StrengthText = styled.span`
  color: #666572;
  text-transform: uppercase;
  margin-left: 1.2em;
`;

const StrengthLevel = styled.span`
  color: #dcdce3;
  text-transform: uppercase;
  margin-right: 0.45rem;
`;

const StyledBars = styled.div`
  display: inline-flex;
  gap: 5px;
  margin-right: 1.2em;
`;

const StyledBar = styled.div`
  border: 1px solid #e5e4ec;
  min-height: 15px;
  width: 5px;
  &:hover {
    background-color: #f5ce6a;
    cursor: pointer;
  }
`;

function StrengthContainer() {
  return (
    <StyledContainer>
      <StrengthText>Strength</StrengthText>
      <StyledBars>
        <StrengthLevel></StrengthLevel>
        <StyledBar></StyledBar>
        <StyledBar></StyledBar>
        <StyledBar></StyledBar>
        <StyledBar></StyledBar>
      </StyledBars>
    </StyledContainer>
  );
}

export default StrengthContainer;
