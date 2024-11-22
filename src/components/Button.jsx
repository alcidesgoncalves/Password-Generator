import styled from "styled-components";
import "../assets/images/icon-arrow-right.svg";

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  column-gap: 0.85rem;
  background-color: #a4fcad;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  padding: 1rem;
  width: 100%;
`;

function Button() {
  return (
    <StyledButtonContainer>
      <StyledButton>
        Generate
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#24232C"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </StyledButton>
    </StyledButtonContainer>
  );
}
export default Button;
