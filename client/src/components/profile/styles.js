import styled from "styled-components";
import {
  MEDIA_BREAKPOINT,
  MOBILE_BACKGROUND_HEIGHT
} from "../../util/constants";
import theme from "../../theme";

export const StyledProfileWrapper = styled.div`
  position: relative;
  width: 600px;
  margin: 0 auto;
  height: 282px;
  padding: 122px 0 38px;
  color: white;
  z-index: 3;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    width: 100%;
    height: ${MOBILE_BACKGROUND_HEIGHT}px;
  }
`;

export const StyledProfileBottom = styled.div`
  display: block;
  padding: 29px 0 100px;
  width: 600px;
  margin: 0 auto;
  color: white;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
`;

export const StyledUserAccounts = styled.div`
  margin-top: 19px;
  padding-top: 19px;
  border-top: 1px solid #232836;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMobileInfoSection = styled.div`
  width: 100%;
  height: 145px;
  background-color: rgba(35, 40, 51, 1);
  padding: 10px 20px;
`;

export const StyledProfileHead = styled.div`
  position: relative;
  width: 100%;
  height: 332px;
  /* background-color: rgb(59, 162, 46); */
  background: linear-gradient(to right, #2193b0, #6dd5ed);
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 145px;
    background-image: linear-gradient(
      to bottom,
      rgba(35, 40, 51, 0.5),
      rgba(35, 40, 51, 0.9)
    );
    content: "";
  }
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    height: ${MOBILE_BACKGROUND_HEIGHT}px;
    &:after {
      display: none;
    }
  }
`;

export const StyledTextarea = styled.textarea`
  background-color: ${theme.blueLight};
  font-family: inherit;
  font-size: inherit;
  color: white;
  outline: none;
  border: none;
  padding: 10px;
  width: 100%;
  margin: auto;
  display: block;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    width: 90%;
  }
`;

export const StyledProfileImgWrapper = styled.div`
  position: absolute;
  bottom: 58px;
  right: 0px;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    right: 20px;
    bottom: -20px;
  }
`;

export const StyledFileInputButton = styled.button`
  position: absolute;
  z-index: 10;
  bottom: 0px;
  right: 0px;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  opacity: 0.7;
`;

export const StyledInput = styled.input`
  background-color: ${theme.blueLight};
  color: white;
  outline: none;
  border: none;
  padding: 10px;
  margin-left: 10px;
  width: 100%;
  margin-top: 20px;
`;
