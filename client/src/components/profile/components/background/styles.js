import styled from "styled-components";
import {
  MEDIA_BREAKPOINT,
  MOBILE_BACKGROUND_HEIGHT
} from "../../../../util/constants";

export const StyledWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

export const StyledSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 332px;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    height: ${MOBILE_BACKGROUND_HEIGHT}px;
  }
`;

export const StyledImg = styled.img`
  display: block;
  object-fit: cover;
  margin: auto;
  width: 100%;
  height: 332px;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    height: ${MOBILE_BACKGROUND_HEIGHT}px;
  }
`;

export const StyledFilter = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 330px;
  background-color: #000;
  opacity: 0.3;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    height: ${MOBILE_BACKGROUND_HEIGHT}px;
  }
`;
