import styled from "styled-components";

const checkboxData = [
  "Include Uppercase Letters",
  "Include Lowercase Letters",
  "Include Numbers",
  "Include Symbols",
];

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 1em 0;
  padding: 1rem;
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  /* Aplica estilos ao checkbox visual quando o input está marcado */
  &:checked + span {
    background: #a4fcad;
    border-color: #a4fcad;

    /* Ícone SVG opcional */
    &::after {
      content: "✔"; /* Ou use um SVG no lugar */
      display: block;
      color: #020202;
      font-size: 14px;
      text-align: center;
    }
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;

const CustomCheckbox = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;
`;

function Checkbox() {
  return (
    <CheckboxContainer>
      {checkboxData.map((data, index) => (
        <StyledLabel key={index}>
          <StyledInput type="checkbox" id={`checkbox-${index}`} name={data} />
          <CustomCheckbox />
          {data}
        </StyledLabel>
      ))}
    </CheckboxContainer>
  );
}
export default Checkbox;
