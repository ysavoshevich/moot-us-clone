import React from "react";

import { StyledWidescreenHeader, StyledWideHeaderWrapper } from "./styles";

import Logo from "./components/logo";
import SearchBar from "./components/search-bar";
import Menu from "./components/menu";
import { OpenAuthFormButton } from "../buttons";
import { useToken, useUI } from "../../context";

function WidescreenHeader() {
  const { token } = useToken();
  const { setLogInFormOpen, setSignUpFormOpen } = useUI();
  return (
    <StyledWidescreenHeader>
      <StyledWideHeaderWrapper>
        <Logo />
        <SearchBar />
        {token ? (
          <Menu />
        ) : (
          <div>
            <OpenAuthFormButton
              children="Sign Up"
              onClick={() => setSignUpFormOpen(true)}
              tabIndex="0"
            />
            <OpenAuthFormButton
              children="Log In"
              onClick={() => setLogInFormOpen(true)}
              tabIndex="0"
            />
          </div>
        )}
      </StyledWideHeaderWrapper>
    </StyledWidescreenHeader>
  );
}

export default WidescreenHeader;
