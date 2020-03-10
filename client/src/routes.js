import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useUser, useToken, useSearchedUser } from "./context";

import Orbitals from "@bit/joshk.react-spinners-css.orbitals";
import Feed from "./screens/feed";
import PrivateRoute from "./components/private-route";
const ProfileView = lazy(() => import("./screens/profile"));

function Routes() {
  const { user, setUser } = useUser();
  const { searchedUser } = useSearchedUser();
  const { token } = useToken();
  return (
    <Switch>
      <Route exact path="/">
        <Feed />
      </Route>
      <PrivateRoute token={token} path="/profile">
        <Suspense
          fallback={
            <Orbitals
              color="white"
              style={{ display: "block", margin: "auto" }}
            />
          }>
          <ProfileView user={user} token={token} setUser={setUser} />
        </Suspense>
      </PrivateRoute>
      <Route path="/users">
        <Suspense
          fallback={
            <Orbitals
              color="white"
              style={{ display: "block", margin: "auto" }}
            />
          }>
          <ProfileView user={searchedUser} />
        </Suspense>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
