import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import theme from "../../../../theme";

import {
  MessageButton,
  HomeButton,
  ProfileButton,
  BellButton,
  NewsButton,
  CalendarButton,
  TrophyButton
} from "../../../buttons";
import { OpenAuthFormButton } from "../../../buttons";

const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.blueExtremeDark};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 700;
`;

function Toolbar({ history, location, token, openLogInForm, openSignUpForm }) {
  return (
    <StyledToolbar>
      {token && (
        <>
          <HomeButton
            active={location.pathname === "/"}
            onClick={() => history.push("/")}
          />
          <ProfileButton
            active={location.pathname === "/profile"}
            onClick={() => history.push("/profile")}
          />
          <MessageButton
            toolbar={true}
            active={location.pathname === "/messages"}
          />
          <BellButton toolbar={true} />
          <NewsButton toolbar={true} />
          <CalendarButton toolbar={true} />
          <TrophyButton toolbar={true} />
        </>
      )}
      {!token && (
        <>
          <OpenAuthFormButton
            children="Sign Up"
            onClick={openSignUpForm}
            tabIndex="0"
          />
          <OpenAuthFormButton
            children="Log In"
            onClick={openLogInForm}
            tabIndex="0"
          />
        </>
      )}
    </StyledToolbar>
  );
}

export default withRouter(Toolbar);
