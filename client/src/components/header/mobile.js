import React from "react";
import SearchBar from "./components/search-bar";
import Toolbar from "./components/toolbar";
import { StyledSearchBarWrapper } from "./styles";
import { useToken, useUI } from "../../context";

export default function MobileHeader() {
  const { token } = useToken();
  const { setLogInFormOpen, setSignUpFormOpen } = useUI();
  return (
    <StyledSearchBarWrapper>
      <SearchBar />
      <Toolbar
        token={token}
        openLogInForm={() => setLogInFormOpen(true)}
        openSignUpForm={() => setSignUpFormOpen(true)}
      />
    </StyledSearchBarWrapper>
  );
}
