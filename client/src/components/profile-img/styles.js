import styled from "styled-components";
import { MEDIA_BREAKPOINT } from "../../util/constants";

export const StyledProfileImg = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    width: ${props => {
      if (props.size < 55) {
        return "40px";
      }
      return "82px";
    }};
    height: ${props => {
      if (props.size < 55) {
        return "40px";
      }
      return "82px";
    }};
  }
`;

export const StyledProfileImgWrapper = styled.div`
  position: relative;
`;

export const StyledOnlineIndicator = styled.span`
  width: ${props => {
    if (props.size < 55) {
      return "6px";
    }
    return "16px";
  }};
  height: ${props => {
    if (props.size < 55) {
      return "6px";
    }
    return "16px";
  }};
  position: absolute;
  left: ${props => {
    if (props.size < 55) {
      return "1px";
    }
    return "9px";
  }};
  top: 8px;
  border-radius: 50%;
  background-color: #00ff3f;
  content: "";
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    left: 1px;
    top: 4px;
    width: ${props => {
      if (props.size < 55) {
        return "6px";
      }
      return "12px";
    }};
    height: ${props => {
      if (props.size < 55) {
        return "6px";
      }
      return "12px";
    }};
  }
`;
