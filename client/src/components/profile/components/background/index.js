import React from "react";
import PatternImg from "../../../../static/pattern.png";
import MaskImg from "../../../../static/mask.png";
import { StyledSpan, StyledFilter, StyledImg, StyledWrapper } from "./styles";

function Background({ small }) {
  return (
    <StyledWrapper>
      <StyledFilter />
      <StyledSpan>
        <StyledImg src={PatternImg} />
      </StyledSpan>
      {!small && (
        <StyledSpan>
          <StyledImg src={MaskImg} />
        </StyledSpan>
      )}
    </StyledWrapper>
  );
}

export default Background;
