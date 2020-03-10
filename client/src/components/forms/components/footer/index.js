import React from "react";
import { OpenAuthFormButton } from "../../../buttons";
import styled from "styled-components";

const StyledFooter = styled.footer`
  p {
    text-align: center;
  }
`;

function Footer({ text, btnText, openOtherForm }) {
  return (
    <StyledFooter>
      <p>
        {text}
        <OpenAuthFormButton
          onClick={openOtherForm || null}
          children={btnText || null}
          style={{ color: "black", padding: "1px 3px" }}
        />
      </p>
    </StyledFooter>
  );
}

export default Footer;
