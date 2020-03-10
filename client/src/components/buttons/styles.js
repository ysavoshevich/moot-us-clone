import styled from "styled-components";
import { MEDIA_BREAKPOINT } from "../../util/constants";

export const StyledClearButton = styled.i`
  margin-right: 7px;
  color: grey;
  cursor: pointer;
`;

export const StyledMenuButton = styled.i`
  color: grey;
  font-size: 20px;
  transition: color 0.35s ease;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const StyledAuthFormButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  height: 48px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const StyledGoogleButton = styled(StyledAuthFormButton)`
  background-color: #e54f47;
  color: #fff;
  &:hover {
    background-color: #d8433b;
  }
  &:focus {
    background-color: #d8433b;
  }
  i {
    font-size: 24px;
    position: absolute;
    left: 16px;
    top: 12px;
    width: 30px;
    height: 30px;
    display: inline-block;
    background-repeat: no-repeat;
  }
`;

export const StyledAuthFormEnterButton = styled(StyledAuthFormButton)`
  background-color: #404355;
  color: #fff;
  &:hover {
    background-color: #2b3043;
  }
  &:focus {
    background-color: #2b3043;
  }
`;

export const StyledOpenAuthFormBtn = styled.a`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #e7e7e8;
  cursor: pointer;
  padding: 1px 10px;
  outline: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
  }
  & + & {
    border-left: 1px solid white;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    & + & {
      border-left: none;
    }
  }
`;

export const StyledToolbarButton = styled.i`
  color: ${props => (props.active ? "white" : "grey")};
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledEditButton = styled.button`
  margin-top: 5px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 31px;
  font-size: 13px;
  font-weight: 500;
  color: #dfe1ee;
  outline: none;
  border: none;
  padding: 5px;
  width: 65px;
  cursor: pointer;
  background-color: rgba(21, 24, 32, 0.7);
  &:hover {
    background-color: #151820;
  }
  &:focus {
    background-color: #151820;
  }
`;

export const StyledCloseButton = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 0px;
  color: grey;
  cursor: pointer;
  &:after {
    content: "";
    height: 20px;
    border-left: 2px solid grey;
    position: absolute;
    transform: rotate(45deg);
    left: 28px;
  }

  &:before {
    content: "";
    height: 20px;
    border-left: 2px solid grey;
    position: absolute;
    transform: rotate(-45deg);
    left: 28px;
  }
`;

export const StyledWritePostButton = styled.button`
  border: none;
  cursor: pointer;
  width: 100px;
  height: 40px;
  border-radius: 3px;
  background-color: #8c51f4;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  outline: 0;
  transition: background 0.3s ease;
  &:hover {
    background-color: #9f6efa;
  }
`;

export const StyledJoinButton = styled.button`
  margin-left: 60px;
  border: none;
  cursor: pointer;
  width: 62px;
  height: 27px;
  background: white;
  font-weight: bold;
  border-radius: 3px;
  transition: opacity 0.25s ease;
  &:hover {
    opacity: 0.8;
  }
  span {
    overflow: hidden !important;
    position: absolute !important;
    height: 1px !important;
    width: 1px !important;
    clip: rect(1px, 1px, 1px, 1px);
  }
`;

export const StyledDeleteButton = styled.button`
  margin-left: 60px;
  border: none;
  cursor: pointer;
  width: 62px;
  height: 27px;
  background: #ff2b4b;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  transition: opacity 0.25s ease;
  &:hover {
    opacity: 0.8;
  }
`;

// @media (max-width: ${MEDIA_BREAKPOINT}px) {
//   margin-left: 200px;
// }
