import styled from "styled-components";
import { MEDIA_BREAKPOINT } from "../../../../util/constants";

export const StyledUsername = styled.p`
  font-size: 27px;
  width: 80%;
  color: white;
  font-weight: bold;
  position: relative;
  top: 25px;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    font-size: 24px;
    position: relative;
    top: -45px;
  }
`;

export const StyledFollowCount = styled.div`
  font-size: 15px;
  margin-top: 38px;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    margin-top: -30px;
  }
`;

export const StyledUsernameInput = styled.input`
  background: none;
  z-index: 5;
  font-size: 27px;
  color: white;
  border: none;
  outline: none;
  position: relative;
  top: 15px;
  border-bottom: 1px solid grey;
  transition: border 0.3s ease;
  padding: 5px 20px 5px 20px;
  &:focus {
    border-bottom: 1px solid white;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    position: relative;
    top: -45px;
    padding: 0px;
    width: 60%;
  }
`;

export const StyledErrorMessage = styled.p`
  word-wrap: break-word;
  margin-top: 5px;
  color: #ff2b4b;
`;
