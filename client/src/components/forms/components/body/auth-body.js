import React, { useState } from "react";
import axios from "axios";

import { updateLocalStorage } from "../../../../util/auth";
import { useUser, useToken } from "../../../../context";

import Ellipsis from "@bit/joshk.react-spinners-css.ellipsis";
import { StyledBody, P, Error } from "./styles";
import Input from "../input/index";
import { GoogleButton, AuthFormEnterButton } from "../../../buttons/index";
import GoogleLogin from "react-google-login";

function AuthBody({ signup, closeForm }) {
  const { setToken } = useToken();
  const { setUser } = useUser();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

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

  const loginHandler = async e => {
    e.preventDefault();
    try {
      setDisabled(true);
      const response = await axios.post("/api/auth/login", { email, password });
      const user = response.data.user;
      const token = response.headers.authorization;
      setUser(user);
      setToken(token);
      updateLocalStorage(token, user);
      closeForm();
      setDisabled(false);
    } catch (error) {
      if (error.response.data.message) {
        setError(error.response.data.message);
        setDisabled(false);
      }
    }
  };

  const signupHandler = async e => {
    e.preventDefault();
    try {
      setDisabled(true);
      const response = await axios.post("/api/auth/register", {
        email,
        password,
        username,
        passwordConfirm
      });
      const user = response.data.user;
      const token = response.headers.authorization;
      setUser(user);
      setToken(token);
      updateLocalStorage(token, user);
      closeForm();
      setDisabled(false);
    } catch (error) {
      if (error.response.data.message) {
        setError(error.response.data.message);
        setDisabled(false);
      }
    }
  };

  const responseGoogle = async res => {
    try {
      const response = await axios.get("/api/auth/google", {
        headers: { access_token: res.accessToken }
      });
      const user = response.data.user;
      const token = response.headers.authorization;
      setUser(user);
      setToken(token);
      updateLocalStorage(token, user);
      setDisabled(false);
    } catch (error) {
      console.log(error);
      if (error.response.data.message) {
        setError(error.response.data.message);
        setDisabled(false);
      }
    }
  };

  return (
    <StyledBody>
      <GoogleLogin
        clientId="909565964000-h9736obgpvpn24f2q917kknhsb4oahil.apps.googleusercontent.com"
        render={renderProps => (
          <GoogleButton
            onClick={() => {
              setDisabled(true);
              renderProps.onClick();
            }}
            disabled={renderProps.disabled}>
            {signup ? "Start with Google" : "Log in with Google"}
            <i className="fab fa-google"></i>
          </GoogleButton>
        )}
        onSuccess={res => {
          closeForm();
          responseGoogle(res);
        }}
        cookiePolicy={"single_host_origin"}
      />
      <form onSubmit={e => (signup ? signupHandler(e) : loginHandler(e))}>
        <P children="or" />
        {error && <Error>{error}</Error>}
        {signup && (
          <Input
            onKeyPress={handleEnterKey}
            value={username}
            changeHandler={e => setUsername(e.target.value)}
            placeholder="Username"
          />
        )}
        <Input
          onKeyPress={handleEnterKey}
          value={email}
          changeHandler={e => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <Input
          onKeyPress={handleEnterKey}
          isPassword={true}
          value={password}
          changeHandler={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        {signup && (
          <Input
            onKeyPress={handleEnterKey}
            isPassword={true}
            value={passwordConfirm}
            changeHandler={e => setPasswordConfirm(e.target.value)}
            placeholder="Confirm Password"
          />
        )}
        <AuthFormEnterButton
          children={disabled ? <Ellipsis color="white" size={50} /> : "Enter"}
          type="submit"
          disabled={disabled}
        />
      </form>
    </StyledBody>
  );
}

export default AuthBody;
