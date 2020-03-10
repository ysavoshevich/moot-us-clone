import React from "react";
import styled from "styled-components";
import axios from "axios";

import theme from "../../../../theme";
import { MEDIA_BREAKPOINT } from "../../../../util/constants";
import {
  useScreenSize,
  useUser,
  useSearchedUser,
  useToken,
  useUI
} from "../../../../context/";
import history from "../../../../util/history";

import ProfileImg from "../../../profile-img";
import { JoinButton, DeleteButton } from "../../../buttons";

const StyledPostTop = styled.div`
  font-family: "Helvetica Neue", Helvetica, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 76px;
  padding: 15px 20px;
  background-color: ${theme.blueExtremeLight};
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    justify-content: space-between;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 130px;
  margin-left: ${props => `${props.marginLeft}px`};
  h6 {
    font-size: 15px;
    color: white;
  }
  p {
    margin-top: 3px;
    font-size: 12px;
    color: ${theme.textColor};
  }
`;

function PostTop({
  post: { username, avatarUrl, playersNeeded, playersJoined, gameID, _id },
  deletePost
}) {
  const { small } = useScreenSize();
  const {
    user: { username: currentUsername }
  } = useUser();
  const { setSearchedUser } = useSearchedUser();
  const { token } = useToken();
  const { setLogInFormOpen } = useUI();

  const clickHandler = async () => {
    if (username !== currentUsername) {
      const response = await axios.get(`/api/profile/${username}`);
      setSearchedUser(response.data);
      history.push(`/users/${username}`);
    } else {
      history.push(`/profile`);
    }
  };
  return (
    <StyledPostTop>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ProfileImg
          size={small ? 10 : 53}
          src={avatarUrl}
          onClick={clickHandler}
        />
        <StyledInfo marginLeft={20}>
          <h6 style={{ cursor: "pointer" }} onClick={clickHandler}>
            {username}
          </h6>
          <p>Game ID: {gameID}</p>
          {small && (
            <div>
              <p style={{ display: "inline" }}>Players Needed: </p>
              <h6 style={{ display: "inline" }}>
                {playersJoined}/{playersNeeded}
              </h6>
            </div>
          )}
        </StyledInfo>
        {!small && (
          <StyledInfo marginLeft={100}>
            <h6>
              {playersJoined}/{playersNeeded}
            </h6>
            <p>Players Needed</p>
          </StyledInfo>
        )}
      </div>
      {username === currentUsername ? (
        <DeleteButton onClick={() => deletePost(_id)}>Delete</DeleteButton>
      ) : (
        <JoinButton
          onClick={() => {
            if (!token) {
              setLogInFormOpen(true);
            }
          }}>
          Join
        </JoinButton>
      )}
    </StyledPostTop>
  );
}

export default PostTop;
