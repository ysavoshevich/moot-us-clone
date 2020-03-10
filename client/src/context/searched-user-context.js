import React, { createContext, useContext } from "react";

const SearchedUserContext = createContext();

export function useSearchedUser() {
  const { searchedUser, setSearchedUser } = useContext(SearchedUserContext);
  return { searchedUser, setSearchedUser };
}

export function SearchedUserProvider({
  searchedUser,
  setSearchedUser,
  ...rest
}) {
  return (
    <SearchedUserContext.Provider
      value={{ searchedUser, setSearchedUser }}
      {...rest}
    />
  );
}
