import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px #d9d9d9 solid;
  padding: 12px;
  font-size: 16px;
  margin: 5px 0px;
  width: 100%;
  outline: none;
  &:focus {
    border: 1px #7d7d7d solid;
  }
`;

export const StyledLabel = styled.label`
  overflow: hidden !important;
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  clip: rect(1px, 1px, 1px, 1px);
`;
