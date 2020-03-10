import React, { createContext, useContext } from "react";

const ScreenSizeContext = createContext();

export function useScreenSize() {
  const { small } = useContext(ScreenSizeContext);
  return { small };
}

export function ScreenSizeProvider({ matches, ...rest }) {
  return <ScreenSizeContext.Provider value={matches} {...rest} />;
}
