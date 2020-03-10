import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, token, children, ...rest }) {
  return <Route {...rest}>{token ? children : <Redirect to="/" />}</Route>;
}

export default PrivateRoute;
