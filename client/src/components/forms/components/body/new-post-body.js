import React, { useState, useMemo } from "react";
import axios from "axios";

// import { updateLocalStorage } from "../../../../util/auth";
import { useUser, useToken } from "../../../../context";
import {
  gameOptions,
  regionOptions,
  platformOptions
} from "../../../../util/options";

import Ellipsis from "@bit/joshk.react-spinners-css.ellipsis";
import { StyledBody, P, Error } from "./styles";
import Input from "../input/index";
import { Select, MenuItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AuthFormEnterButton } from "../../../buttons/index";

const useStyles = makeStyles(theme => ({
  select: {
    width: "70%",
    marginLeft: "20px",
    maxHeight: 200
  },
  btn1: {
    display: "block",
    margin: "auto",
    height: "100%",
    width: "30%",
    border: "grey 1px solid"
  },
  btn2: {
    fontSize: "13px",
    display: "block",
    height: "40px",
    width: "50%",
    border: "grey 1px solid"
  }
}));

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200
    }
  }
};

function NewPostBody({ closeForm }) {
  const classes = useStyles();
  const {
    user: {
      username,
      profile: { gameAccounts, avatarUrl }
    }
  } = useUser();
  const { token } = useToken();
  const [values, setValues] = useState({
    game: "fortnite",
    platform: "pc",
    region: "eu",
    description: "",
    playersNeeded: 1,
    gameID: gameAccounts["fortnite"]
  });
  const [stage, setStage] = useState(1);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const playersNeeded = useMemo(() => {
    const players = [];
    for (let i = 0; i < 101; i++) {
      players.push({ value: i, label: i });
    }
    return players;
  }, []);

  const handleChange = name => event => {
    if (name === "game") {
      setValues({
        ...values,
        [name]: event.target.value,
        gameID: gameAccounts[event.target.value]
      });
    } else {
      setValues({
        ...values,
        [name]: event.target.value
      });
    }
  };

  const handleEnterKey = e => {
    if (e.charCode === 13) {
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      if (form.elements[index + 2]) {
        form.elements[index + 1].focus();
        e.preventDefault();
      }
    }
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      setDisabled(true);
      await axios.post(
        "/api/createPost",
        { ...values, avatarUrl, username },
        { headers: { authorization: `Bearer ${token}` } }
      );
      setDisabled(false);
      closeForm();
    } catch (error) {
      if (error.response.data.message) {
        setError(error.response.data.message);
      }
      setDisabled(false);
    }
  };

  return (
    <StyledBody>
      <form onSubmit={submitHandler}>
        {error && <Error>{error}</Error>}
        {stage === 1 && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}>
              <P children="Game" />
              <Select
                className={classes.select}
                value={values.game}
                onChange={handleChange("game")}>
                {gameOptions.map(opt => (
                  <MenuItem value={opt.value} key={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}>
              <P children="Platform" />
              <Select
                className={classes.select}
                value={values.platform}
                onChange={handleChange("platform")}>
                {platformOptions.map(opt => (
                  <MenuItem value={opt.value} key={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}>
              <P children="Region" />
              <Select
                className={classes.select}
                value={values.region}
                onChange={handleChange("region")}>
                {regionOptions.map(opt => (
                  <MenuItem value={opt.value} key={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}>
              <P children="Players" />
              <Select
                className={classes.select}
                value={values.playersNeeded}
                onChange={handleChange("playersNeeded")}
                MenuProps={MenuProps}>
                {playersNeeded.map(opt => (
                  <MenuItem value={opt.value} key={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px"
              }}>
              <P children="Game ID" />
              <Input
                style={{ width: "70%", height: "35px" }}
                onKeyPress={handleEnterKey}
                placeholder="Enter your game ID..."
                changeHandler={handleChange("gameID")}
                value={values.gameID}
              />
            </div>
            <Button className={classes.btn1} onClick={() => setStage(2)}>
              Next
            </Button>
          </>
        )}
        {stage === 2 && (
          <>
            <P children="Description" style={{ fontSize: "20px" }} />
            <textarea
              style={{
                display: "block",
                fontFamily: "inherit",
                width: "100%",
                padding: "10px"
              }}
              onKeyPress={handleEnterKey}
              value={values.description}
              onChange={handleChange("description")}
              placeholder="Description"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "50%",
                margin: "20px auto 0px auto"
              }}>
              <Button className={classes.btn2} onClick={() => setStage(1)}>
                Go Back
              </Button>
              <AuthFormEnterButton
                children={
                  disabled ? <Ellipsis color="white" size={30} /> : "Post"
                }
                type="submit"
                disabled={disabled}
                style={{
                  width: "40%",
                  height: "40px",
                  margin: 0,
                  borderRadius: "3px"
                }}
              />
            </div>
          </>
        )}
      </form>
    </StyledBody>
  );
}

export default NewPostBody;
