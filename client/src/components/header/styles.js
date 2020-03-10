import styled from "styled-components";
import theme from "../../theme";

export const StyledWidescreenHeader = styled.header`
  background-color: ${theme.blueLight};
  height: 46px;
  width: 100%;
`;

export const StyledWideHeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1100px;
  margin: auto;
  @media (max-width: 1100px) {
    width: 800px;
  }
`;

export const StyledSearchBarWrapper = styled.div`
  background-color: ${theme.blueLight};
  height: 46px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
