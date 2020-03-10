import styled from "styled-components";
import theme from "../../../../theme";
import { MEDIA_BREAKPOINT } from "../../../../util/constants";

export const StyledSearchBar = styled.div`
  position: relative;
  background-color: ${theme.blueExtremeDark};
  border-radius: 32px;
  height: 30px;
  width: 300px;
  margin-right: 200px;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1100px) {
    margin-right: 50px;
    margin-left: 50px;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    margin-right: 0px;
    width: 80%;
    height: 70%;
    border-radius: 2px;
  }
`;
