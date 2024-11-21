import styled from "styled-components";
import React, { useState } from "react";

const LengthContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 1em;
`;

const StyledRange = styled.input.attrs({
  type: "range",
  min: 0,
  max: 100,
})`
  -webkit-appearance: none;
  appearance: none;
  background: #19161f;
  cursor: pointer;
  border-radius: 12px;
  width: 100%;
  height: 0.55rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -2px; /* Centers thumb on the track */
    background-color: #ffffff;
    height: 1rem;
    width: 0.95rem;
    border-radius: 100px;
    padding: 0.55rem;
    box-shadow: 2px 2px 2px #3b3a3a, 0px 0px 5px #080808;
  }
`;

function RangeInput() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <LengthContainer>
      <p>Character Length</p>
      <p>{value}</p>
      <StyledRange type="range" name="" id="" onChange={handleChange} />
    </LengthContainer>
  );
}

export default RangeInput;
