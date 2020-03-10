import React from "react";
import {
  StyledProfileImg,
  StyledOnlineIndicator,
  StyledProfileImgWrapper
} from "./styles";

function ProfileImg({ src, onClick, size, raw }) {
  if (!raw) {
    return (
      <StyledProfileImgWrapper onClick={onClick}>
        <StyledProfileImg src={src} size={size} />
        {/* {online && <StyledOnlineIndicator size={size} />} */}
      </StyledProfileImgWrapper>
    );
  }
  if (raw) {
    return <StyledProfileImg src={src} size={size} onClick={onClick} />;
  }
}

export default ProfileImg;
