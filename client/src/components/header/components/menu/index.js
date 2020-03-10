import React, { useState, useRef } from "react";

import { useOutsideClick } from "../../../../util/hooks";
import { logout } from "../../../../util/auth";
import { useUser } from "../../../../context";
import history from "../../../../util/history";

import { StyledMenuWrapper, StyledProfileWrapper } from "./styles";
import ProfileImg from "../../../profile-img";
import Username from "../username";
import Dropdown from "../dropdown";
import { ArrowIcon } from "../../../icons/index";
import {
  MessageButton,
  BellButton,
  NewsButton,
  CalendarButton,
  TrophyButton
} from "../../../buttons";

function Menu() {
  const ref = useRef(null);
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  useOutsideClick(ref, () => setOpen(false));
  return (
    <StyledMenuWrapper>
      <MessageButton style={{ margin: "10px" }} />
      <BellButton style={{ margin: "10px" }} />
      <NewsButton style={{ margin: "10px" }} />
      <CalendarButton style={{ margin: "10px" }} />
      <TrophyButton style={{ margin: "10px" }} />

      <StyledProfileWrapper ref={ref}>
        <ProfileImg
          src={user.profile.avatarUrl}
          onClick={() => setOpen(!open)}
          size={30}
          raw={true}
        />
        <Username username={user.username} onClick={() => setOpen(!open)} />
        <ArrowIcon open={open} onClick={() => setOpen(!open)} />
        {open && (
          <Dropdown
            elements={[
              {
                text: "My Profile",
                onClick: () => {
                  history.push("/profile");
                  setOpen(false);
                }
              },
              { text: "Logout", onClick: logout }
            ]}
          />
        )}
      </StyledProfileWrapper>
    </StyledMenuWrapper>
  );
}

export default Menu;
