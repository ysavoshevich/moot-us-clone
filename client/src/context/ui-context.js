import React, { createContext, useContext } from "react";

const UIContext = createContext();

export function useUI() {
  const {
    logInFormOpen,
    setLogInFormOpen,
    signUpFormOpen,
    setSignUpFormOpen
  } = useContext(UIContext);
  return { logInFormOpen, setLogInFormOpen, signUpFormOpen, setSignUpFormOpen };
}

export function UIProvider({
  logInFormOpen,
  setLogInFormOpen,
  signUpFormOpen,
  setSignUpFormOpen,
  ...rest
}) {
  return (
    <UIContext.Provider
      value={{
        logInFormOpen,
        setLogInFormOpen,
        signUpFormOpen,
        setSignUpFormOpen
      }}
      {...rest}
    />
  );
}
