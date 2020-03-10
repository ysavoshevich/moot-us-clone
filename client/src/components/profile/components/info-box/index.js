import React from "react";
import { StyledInfoBox, StyledListItem, StyledP, StyledInput } from "./styles";
import { Icon } from "../../../icons";

function InfoBox({ entries, title, isEditMode, changeHandler }) {
  return (
    <StyledInfoBox>
      <h2>{title}</h2>
      <ul>
        {entries.map((entry, i) => (
          <StyledListItem key={i}>
            {entry.id && entry.id !== "avatarUrl" && <Icon id={entry.id} />}
            {!isEditMode ? (
              <StyledP>{entry.value || "No info yet."}</StyledP>
            ) : (
              <StyledInput
                value={entry.value}
                id={entry.id}
                onChange={changeHandler}
              />
            )}
          </StyledListItem>
        ))}
      </ul>
    </StyledInfoBox>
  );
}

export default InfoBox;
