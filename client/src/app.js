import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import Media from "react-media";

import { loginOnRefresh } from "./util/auth";
import { MEDIA_BREAKPOINT } from "./util/constants";
import { SearchedUserProvider } from "./context/searched-user-context";
import { ScreenSizeProvider } from "./context/screen-size-context";
import { UserProvider } from "./context/user-context";
import { TokenProvider } from "./context/token-context";
import { UIProvider } from "./context/ui-context";

import Head from "./components/head";
import Header from "./components/header";
import Routes from "./routes";
import { AuthForms } from "./components/forms";

function App() {
  const [token, setToken] = useState(loginOnRefresh()[0] || null);
  const [user, setUser] = useState(loginOnRefresh()[1] || { profile: {} });
  const [searchedUser, setSearchedUser] = useState({ profile: {} });
  const [signUpFormOpen, setSignUpFormOpen] = useState(false);
  const [logInFormOpen, setLogInFormOpen] = useState(false);
  return (
    <>
      <Head title={"moot.us clone"} />
      <Media queries={{ small: { maxWidth: MEDIA_BREAKPOINT } }}>
        {matches => {
          return (
            <ScreenSizeProvider matches={matches}>
              <UIProvider
                logInFormOpen={logInFormOpen}
                setLogInFormOpen={setLogInFormOpen}
                signUpFormOpen={signUpFormOpen}
                setSignUpFormOpen={setSignUpFormOpen}>
                <TokenProvider token={token} setToken={setToken}>
                  <UserProvider user={user} setUser={setUser}>
                    <SearchedUserProvider
                      searchedUser={searchedUser}
                      setSearchedUser={setSearchedUser}>
                      <Header />
                      <Routes />
                    </SearchedUserProvider>
                    <AuthForms />
                  </UserProvider>
                </TokenProvider>
              </UIProvider>
            </ScreenSizeProvider>
          );
        }}
      </Media>
    </>
  );
}

export default hot(App);
