import styled from "styled-components";

const LengthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function RangeInput() {
  return (
    <div>
      <LengthContainer>
        <p>Character Length</p>
        <p>10</p>
      </LengthContainer>
      <input type="range" name="" id="" />
    </div>
  );
}

export default RangeInput;
