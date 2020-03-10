import React, { useState, useRef, memo } from "react";
import axios from "axios";

import { useOutsideClick } from "util/hooks.js";
import { useUser } from "../../../../context";

import Ripple from "@bit/joshk.react-spinners-css.ripple";
import Dropdown from "../dropdown";
import Input from "../input";
import { SearchIcon } from "../../../icons";
import { StyledSearchBar } from "./styles";
import { ClearInputButton } from "../../../buttons";

function SearchBar() {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const {
    user: { username }
  } = useUser();
  useOutsideClick(ref, () => setShowDropdown(false));
  const changeHandler = async e => {
    setValue(e.target.value);
    if (!e.target.value) {
      setResults([]);
    }
    if (e.target.value) {
      setLoading(true);
      const response = await axios.get(
        `/api/searchUsers?searchValue=${e.target.value}&username=${username}`
      );
      setLoading(false);
      setResults(response.data.usersArr);
    }
  };
  const focusHandler = () => {
    setFocus(true);
    setShowDropdown(true);
  };
  const blurHandler = () => {
    setFocus(false);
  };
  const clearHandler = () => {
    setValue("");
    setResults([]);
  };
  return (
    <StyledSearchBar ref={ref}>
      <Input
        placeholder="Search users..."
        value={value}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {value && <ClearInputButton onClick={clearHandler} />}
      {loading ? (
        <Ripple color="white" size={30} style={{ marginTop: "3px" }} />
      ) : (
        <SearchIcon focus={focus} style={{ marginTop: "3px" }} />
      )}
      {showDropdown && (
        <Dropdown
          results={results}
          closeDropdown={() => setShowDropdown(false)}
        />
      )}
    </StyledSearchBar>
  );
}

export default memo(SearchBar);
