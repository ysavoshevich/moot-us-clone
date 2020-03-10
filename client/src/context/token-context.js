import React, { createContext, useContext } from "react";

const TokenContext = createContext();

export function useToken() {
  const { token, setToken } = useContext(TokenContext);
  return { token, setToken };
}

export function TokenProvider({ token, setToken, ...rest }) {
  return <TokenContext.Provider value={{ token, setToken }} {...rest} />;
}
