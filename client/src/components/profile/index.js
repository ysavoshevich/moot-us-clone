import React, { useState, useEffect, lazy } from "react";
import axios from "axios";

import { updateLocalStorage } from "../../util/auth";
import { useScreenSize } from "../../context/screen-size-context";

import {
  StyledProfileHead,
  StyledProfileWrapper,
  StyledProfileBottom,
  StyledUserAccounts,
  StyledMobileInfoSection,
  StyledTextarea,
  StyledProfileImgWrapper
} from "./styles";
import ProfileImg from "../profile-img";
import InfoSection from "./components/head-info-section";
import InfoBox from "./components/info-box";
const Background = lazy(() => import("./components/background"));

function ProfileComponent({ user, token, setUser }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { small } = useScreenSize();
  const [inputs, setInputs] = useState({
    bio: user.profile.bio,
    username: user.username,
    ...user.profile.gameAccounts,
    ...user.profile.streamingAccounts,
    img: {}
  });

  useEffect(() => {
    setInputs({
      bio: user.profile.bio,
      username: user.username,
      avatarUrl: user.profile.avatarUrl,
      ...user.profile.gameAccounts,
      ...user.profile.streamingAccounts
    });
  }, [setInputs, user]);

  const save = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "/api/saveProfile",
        { ...inputs },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      updateLocalStorage(token, response.data.user);
      setUser(response.data.user);
      setIsLoading(false);
      setIsEditMode(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
      if (error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  const gameAccounts = [];
  for (let key in user.profile.gameAccounts) {
    gameAccounts.push({ id: key, value: inputs[key] });
  }

  const streamingAccounts = [];
  for (let key in user.profile.streamingAccounts) {
    streamingAccounts.push({
      id: key,
      value: inputs[key]
    });
  }

  const changeHandler = e => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  return (
    <>
      <StyledProfileHead>
        <Background />
        <StyledProfileWrapper>
          {!small && (
            <InfoSection
              token={token}
              error={error}
              username={user.username}
              isEditMode={isEditMode}
              setIsEditMode={setIsEditMode}
              save={save}
              value={inputs.username}
              id="username"
              changeHandler={changeHandler}
              isLoading={isLoading}
            />
          )}
          <StyledProfileImgWrapper>
            <ProfileImg src={user.profile.avatarUrl} size={112} />
          </StyledProfileImgWrapper>
        </StyledProfileWrapper>
      </StyledProfileHead>
      {small && (
        <StyledMobileInfoSection>
          <InfoSection
            token={token}
            error={error}
            username={user.username}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            save={save}
            value={inputs.username}
            id="username"
            changeHandler={changeHandler}
            isLoading={isLoading}
          />
        </StyledMobileInfoSection>
      )}
      <StyledProfileBottom>
        {!isEditMode && <div>{user.profile.bio || "User has no bio yet."}</div>}
        {isEditMode && (
          <StyledTextarea value={inputs.bio} onChange={changeHandler} id="bio">
            {inputs.bio}
          </StyledTextarea>
        )}

        <StyledUserAccounts>
          {isEditMode && (
            <InfoBox
              entries={[{ value: inputs.avatarUrl, id: "avatarUrl" }]}
              title="Avatar URL"
              isEditMode={isEditMode}
              changeHandler={changeHandler}
            />
          )}
          {!isEditMode && (
            <InfoBox
              entries={[{ value: "Joined Moot November 10, 2019", id: "user" }]}
              title="Sign up date"
              changeHandler={changeHandler}
            />
          )}
          <InfoBox
            entries={streamingAccounts}
            title="Streaming Accounts"
            isEditMode={isEditMode}
            changeHandler={changeHandler}
          />
          <InfoBox
            entries={gameAccounts}
            title="Game Accounts"
            isEditMode={isEditMode}
            changeHandler={changeHandler}
          />
        </StyledUserAccounts>
      </StyledProfileBottom>
    </>
  );
}

export default ProfileComponent;
