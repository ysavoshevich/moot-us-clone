import React from "react";
import styled from "styled-components";
import { CloseButton } from "../../../buttons";

const StyledHeader = styled.header`
  position: relative;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
`;

function Header({ title, closeForm }) {
  return (
    <StyledHeader>
      {title}
      <CloseButton onClick={closeForm} />
    </StyledHeader>
  );
}

export default Header;
