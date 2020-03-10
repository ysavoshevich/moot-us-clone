import styled from "styled-components";

export const StyledSearchIcon = styled.i`
  color: ${props => (props.focus ? "white" : "rgb(100,100,100)")};
  font-size: 15px;
  margin-right: 8px;
  transition: color 0.35s ease;
`;

export const StyledArrowIcon = styled.i`
  height: 10px;
  transform: ${props => (props.open ? `rotateZ(0deg)` : `rotateZ(180deg)`)};
  margin-top: 0px;
  margin-left: 5px;
`;
