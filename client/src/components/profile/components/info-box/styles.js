import styled from "styled-components";
import theme from "../../../../theme";

export const StyledInfoBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 0 29px 0;
  h2 {
    margin-bottom: 17px;
    font-size: 13px;
    font-weight: 500;
    color: #dfe1ee;
  }
  p {
    min-width: 0;
    font-size: 13px;
    font-weight: normal;
    color: #8a8ca0;
    display: block;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    word-break: normal;
    word-wrap: normal;
  }
`;

export const StyledListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

export const StyledP = styled.p`
  margin-left: 10px;
`;

export const StyledInput = styled.input`
  background-color: ${theme.blueLight};
  color: white;
  outline: none;
  border: none;
  padding: 10px;
  margin-left: 10px;
  width: 300px;
`;
