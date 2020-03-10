import React, { useState, useEffect } from "react";
import axios from "axios";

import { useUser, useToken, useSearchedUser } from "../context";
import history from "../util/history";

import ProfileComponent from "../components/profile";
import Head from "../components/head";
import Orbitals from "@bit/joshk.react-spinners-css.orbitals";

function ProfileView() {
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useUser();
  const { token } = useToken();
  const { searchedUser, setSearchedUser } = useSearchedUser();
  const checkIfSearchedUser = () => {
    return history.location.pathname.split("/")[1] === "users";
  };
  const findProfile = async () => {
    if (
      !searchedUser.username &&
      history.location.pathname.split("/")[1] === "users"
    ) {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/api/profile/${history.location.pathname.split("/")[2]}`
        );
        setSearchedUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    findProfile();
  });
  return (
    <>
      <Head
        title={`${
          checkIfSearchedUser() ? searchedUser.username : user.username
        }'s profile`}
      />
      {isLoading && (
        <Orbitals color="white" style={{ display: "block", margin: "auto" }} />
      )}
      {!isLoading && (
        <ProfileComponent
          user={checkIfSearchedUser() ? searchedUser : user}
          setUser={setUser}
          token={!checkIfSearchedUser() ? token : null}
        />
      )}
    </>
  );
}

export default ProfileView;
