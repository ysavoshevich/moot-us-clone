import React from "react";
import { StyledInput, StyledLabel } from "./styles";

function Input({
  isPassword,
  value,
  changeHandler,
  placeholder,
  onKeyPress,
  style
}) {
  return (
    <>
      <StyledLabel htmlFor={placeholder}>{placeholder}</StyledLabel>
      <StyledInput
        style={style}
        onKeyPress={onKeyPress}
        id={placeholder}
        type={isPassword ? "password" : "text"}
        value={value}
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </>
  );
}

export default Input;
