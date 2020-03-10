import React from "react";
import WidescreenHeader from "./widescreen";
import MobileHeader from "./mobile";
import { useScreenSize } from "../../context/screen-size-context";

function Header({ ...rest }) {
  const { small } = useScreenSize();
  return small ? <MobileHeader {...rest} /> : <WidescreenHeader {...rest} />;
}

export default Header;
