import React from "react";
import styled from "styled-components";
import { MEDIA_BREAKPOINT } from "../../../../util/constants";

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: 250px;
  padding: 8px 15px;
  background: none;
  border: none;
  outline: none;
  border-radius: 32px;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    height: 90%;
    width: 80%;
    padding: 5px 15px 0px 15px;
  }
`;

export default function Input({ value, onChange, onFocus, onBlur }) {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
