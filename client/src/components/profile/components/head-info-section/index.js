import React from "react";

import { logout } from "../../../../util/auth";

import {
  StyledUsername,
  StyledFollowCount,
  StyledUsernameInput,
  StyledErrorMessage
} from "./styles";
import Ellipsis from "@bit/joshk.react-spinners-css.ellipsis";
import {
  EditButton,
  SaveButton,
  LogoutButton,
  CancelButton
} from "../../../buttons";

function InfoSection({
  error,
  username,
  isEditMode,
  setIsEditMode,
  save,
  changeHandler,
  id,
  value,
  isLoading,
  token
}) {
  return (
    <>
      {!isEditMode ? (
        <StyledUsername>{username}</StyledUsername>
      ) : (
        <StyledUsernameInput value={value} onChange={changeHandler} id={id} />
      )}
      <StyledFollowCount>
        <span>0 Followers</span>
        <span style={{ marginLeft: "8px" }}>0 Following</span>
      </StyledFollowCount>
      <div style={{ display: "flex" }}>
        {!isEditMode && token && (
          <EditButton onClick={() => setIsEditMode(true)}>
            <i className="fas fa-cog"></i> Edit
          </EditButton>
        )}
        {isEditMode && (
          <div style={{ display: "flex" }}>
            <SaveButton onClick={save}>
              {!isLoading && <i className="fas fa-save"></i>}
              {isLoading && <Ellipsis color="white" size={20} />}
              Save
            </SaveButton>
            <CancelButton
              style={{ marginLeft: "5px", width: "80px" }}
              onClick={() => setIsEditMode(false)}>
              <i className="fas fa-window-close"></i>
              Cancel
            </CancelButton>
          </div>
        )}
        {!isEditMode && token && (
          <LogoutButton
            onClick={logout}
            style={{ marginLeft: "5px", width: "80px" }}>
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </LogoutButton>
        )}
      </div>
      {error && isEditMode && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </>
  );
}

export default InfoSection;
