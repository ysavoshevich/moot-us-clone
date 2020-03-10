import React from "react";
import DropdownElement from "../dropdown-element";
import styled from "styled-components";

const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 1000;
`;

function Dropdown({ results, elements, closeDropdown }) {
  return (
    <StyledDropdown>
      {results &&
        results.map((result, i) => (
          <DropdownElement
            text={result}
            key={i}
            closeDropdown={closeDropdown}
          />
        ))}
      {elements &&
        elements.map((el, i) => (
          <DropdownElement
            text={el.text}
            key={i}
            onClick={el.onClick}
            closeDropdown={closeDropdown}
          />
        ))}
    </StyledDropdown>
  );
}

export default Dropdown;
