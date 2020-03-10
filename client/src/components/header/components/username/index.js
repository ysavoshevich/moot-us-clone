import React from "react";
import styled from "styled-components";

const StyledUsername = styled.p`
  margin-left: 5px;
  font-size: 14px;
  height: 100%;
  display: flex;
  align-items: center;
`;

function Username({ username, onClick }) {
  return <StyledUsername onClick={onClick}>{username}</StyledUsername>;
}

export default Username;
