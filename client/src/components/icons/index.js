import React from "react";
import forwardProps from "../../util/forwardProps";
import { StyledSearchIcon, StyledArrowIcon } from "./styles";

export const SearchIcon = props =>
  forwardProps(StyledSearchIcon, { className: "fas fa-search", ...props });

export const ArrowIcon = props =>
  forwardProps(StyledArrowIcon, { ...props, className: "fas fa-sort-up" });

export function Icon({ id }) {
  return (
    <img
      alt="icon"
      style={{ width: "24px", height: "24px" }}
      src={require(`../../static/icons/${id}.png`)}
    />
  );
}
