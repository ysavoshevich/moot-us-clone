import React, { createContext, useContext } from "react";

const UserContext = createContext();

export function useUser() {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
}

export function UserProvider({ user, setUser, ...rest }) {
  return <UserContext.Provider value={{ user, setUser }} {...rest} />;
}
