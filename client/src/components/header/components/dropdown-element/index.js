import React, { useState } from "react";
import styled from "styled-components";
import Ellipsis from "@bit/joshk.react-spinners-css.ellipsis";
import theme from "../../../../theme";
import { useSearchedUser } from "../../../../context/searched-user-context";
import history from "../../../../util/history";
import axios from "axios";

const StyledDropdownElement = styled.div`
  color: white;
  font-size: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: ${theme.blueMediumLight};
  &:hover {
    background-color: ${theme.blueExtremeLight};
  }
`;

function DropdownElement({ text, onClick, closeDropdown }) {
  const { setSearchedUser } = useSearchedUser();
  const [loading, setLoading] = useState(false);

  const clickHandler = async () => {
    setLoading(true);
    const response = await axios.get(`/api/profile/${text}`);
    setSearchedUser(response.data);
    setLoading(false);
    closeDropdown();
    history.push(`/users/${text}`);
  };

  return (
    <StyledDropdownElement
      onClick={onClick ? onClick : clickHandler}
      tabIndex={0}>
      {text}
      {loading && <Ellipsis color="white" size={20} />}
    </StyledDropdownElement>
  );
}

export default DropdownElement;
