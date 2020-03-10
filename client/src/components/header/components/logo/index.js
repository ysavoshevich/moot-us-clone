import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  height: 100%;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
`;

function Logo() {
  return <StyledLink to="/">moot</StyledLink>;
}

export default Logo;
