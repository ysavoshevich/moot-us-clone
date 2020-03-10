import styled from "styled-components";
import { MEDIA_BREAKPOINT } from "../../util/constants";

export const StyledFormWrapper = styled.div`
  background-color: white;
  color: black;
  height: 600px;
  width: 400px;
  z-index: 1000;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;
