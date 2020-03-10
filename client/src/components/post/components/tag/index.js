import React from "react";
import styled from "styled-components";

const StyledTag = styled.span`
  display: inline-block;
  height: 22px;
  padding: 0 10px;
  margin: 0px 2px;
  font-size: 11px;
  font-weight: 500;
  line-height: 22px;
  border-radius: 11px;
  vertical-align: top;
  background-color: #34394d;
`;

function Tag({ text }) {
  return <StyledTag>#{text}</StyledTag>;
}

export default Tag;
